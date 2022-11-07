import { Router } from "express";

const router = Router()
router.get("/categories", (req, res) => {
    res.send("ROTA DE CATEGORIAS")
})

router.get("/admin/categories", (req, res) => {
    res.send("Rota para criar uma nova categoria")
})

export default router