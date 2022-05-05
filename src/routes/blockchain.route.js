import { Router } from "express";
import { createBlockChain, getBlockchain, getBlockchains } from "../services/blockchain.service.js";

export const blockchainRouter = Router();



blockchainRouter.post('/blockchain', async (req, res) => {
    const blockchain = req.body;
    const id = await createBlockChain(blockchain);
    res.send(id.toString());
});

blockchainRouter.get('/blockchain/:name', async (req, res) => {
    const blockchain = req.params.name;
    const blockchains = await getBlockchain(blockchain);
    res.status(200).send(blockchains)
})