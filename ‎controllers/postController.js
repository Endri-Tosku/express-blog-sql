const dataPost = require('./../data/posts')

// INDEX
function index(req, res) {
    res.json(dataPost);
}

// SHOW
function show(req, res) {
    // recuperiamo l'id dall'URL e lo convertiamo in numero
    const idNum = parseInt(req.params.id);

    throw new Error("Errore di test middleware");


    const post = dataPost.find(post => post.id === idNum);

    // controllo se il post esiste
    if (!post) {

        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // restituiamo il post trovato
    res.json(post);
}

// STORE
function store(req, res) {

    const newId = dataPost[dataPost.length - 1].id + 1;

    // Creiamo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo la nuova post al menu
    dataPost.push(newPost);

    // controlliamo
    console.log(dataPost);


    // Restituiamo lo status corretto e il post appena creata
    res.status(201);
    res.json(newPost);
}

// UPDATE
function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = dataPost.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "post non trovata"
        })
    }

    // Aggiorniamo il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Controlliamo il menu
    console.log(dataPost)

    // Restituiamo la post appena aggiornata...
    res.json(post);
}

// DESTROY
function destroy(req, res) {

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = dataPost.find(post => post.id === id);

    // piccolo controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovata"
        })
    }

    // rimozione tramite indexOf
    dataPost.splice(dataPost.indexOf(post), 1);

    console.log(dataPost);

    // forziamo status secondo convenzioni REST che chiude anche function
    res.sendStatus(204)
}

// esportiamo tutte le funzioni
module.exports = { index, show, store, update, destroy };