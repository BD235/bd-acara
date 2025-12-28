//src/controllers/dummy.controller.ts

import {Request, Response} from "express";

export default {
    dummy(req: Request, res: Response) {
        res.status(200).json({
            massage:"Success hit endpoint /dummy -- hasil ubahan",
            data: "ok"
        });
    },
};