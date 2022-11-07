import { Router } from "express";

const router = Router()
router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGOS")
})

router.get("/admin/articles/new", (req, res) => {
    res.send("Rota para criar um novo artigo")
})

export default router