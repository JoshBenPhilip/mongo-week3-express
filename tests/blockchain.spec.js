import { createBlockChain } from "../src/services/blockchain.service"

describe('Blockchain Test Suite', () => {
    it ('should create a Blockchain', async () => {
        await createBlockChain({
            name: 'Solana',
            language: 'Rust',
            marketCap: 1,
            supportsSmartContracts: true,

        });
    })
}) 