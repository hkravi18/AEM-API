const prisma = require('../utils/prismaClient.js');
const { v4: uuidv4 } = require('uuid');

//utils 
const { transactionValidation } = require('../utils/handleValidation.js');

// @desc    Get Transaction List
// route    GET /api/transactions/list
// @access  Private (Admin) 
const getTransactionsList = async(req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const userId = req.user?.userId;

        const transactions = await prisma.transaction.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lt: endDate
                },
                userId
            }
        });

        return res.status(200).json({
            ok: true,
            message: 'Transactions fetched successfully',
            data: {
                transactions
            }
        });
    } catch (err) {
        console.error(`ERROR (get-transactions-list): ${err.message}`);
        return res.status(500).json({
            ok: false,
            error: `Error in fetching transactions list`,
            data: {}
        })
    }    
}; 

// @desc    Get Transaction Summary
// route    GET /api/transactions/summary
// @access  Private (Admin) 
const getTransactionsSummary = async(req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const userId = req.user?.userId;

        const transactions = await prisma.transaction.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lt: endDate
                },
                userId
            }
        });

        const stats = {
            totalIncome: 0,
            totalExpense: 0,
            saving: 0
        };

        transactions.map((transaction) => {
            if (transaction.type === "INCOME") {
                stats.totalIncome += transaction.amount;
            } else if (transaction.type === "EXPENSE") {
                stats.totalExpense += transaction.amount;
            }
        });

        stats.saving = stats.totalIncome - stats.totalExpense;

        return res.status(200).json({
            ok: true,
            message: 'Transactions Summary fetched successfully',
            data: {
                stats
            }
        });
    } catch (err) {
        console.error(`ERROR (get-transactions-summary): ${err.message}`);
        return res.status(500).json({
            ok: false,
            error: `Error in fetching transactions summary`,
            data: {}
        })
    }    
}; 

// @desc    Create Transaction 
// route    POST /api/transactions/
// @access  Private (Admin) 
const addTransaction = async(req, res) => {
    try {
        const validationRes = transactionValidation({ type: req.body?.type, amount: req.body?.amount });
        if (validationRes.valid === false) {
            return res.status(400).json({
                ok: false,
                error: isValid.error,
                data: {}  
            });
        }

        const userId = req.user?.id;
        const createdTransaction = await prisma.transaction.create({
            data: {
                id: uuidv4(),
                type: req.body?.type,
                amount: req.body?.amount,
                description: req.body?.description,
                userId: userId,
            },
        });

        if (createdTransaction) {
            return res.status(200).json({
                ok: true,
                message: 'Transactions created successfully',
                data: {
                    createdTransaction
                }
            });
        } else {
            console.error(`ERROR (create-transaction): ${err.message}`);
            return res.status(500).json({
                ok: false,
                error: `Error in creating transaction`,
                data: {}
            })
        }
        
    } catch (err) {
        console.error(`ERROR (create-transaction): ${err.message}`);
        return res.status(500).json({
            ok: false,
            error: `Error in creating transaction`,
            data: {}
        })
    }    
}; 


// @desc    Delete Transaction 
// route    GET /api/transactions/list
// @access  Private (Admin) 
const deleteTransaction = async(req, res) => {
    try {
        const id = req.params?.id;
        const userId = req.user?.userId;

        const deletedTransaction = await prisma.transaction.delete({
            where: {
                id,
                userId
            }
        });

        if (deletedTransaction) {
            return res.status(200).json({
                ok: true,
                message: 'Transactions deleted successfully',
                data: {
                    deletedTransaction
                }
            });
        } else {
            console.error(`ERROR (delete-transaction): ${err.message}`);
            return res.status(500).json({
                ok: false,
                error: `Error in delete transaction`,
                data: {}
            })
        }    
    } catch (err) {
        console.error(`ERROR (delete-transaction): ${err.message}`);
        return res.status(500).json({
            ok: false,
            error: `Error in delete transaction`,
            data: {}
        })
    }    
}; 



module.exports = {
    getTransactionsList,
    getTransactionsSummary,
    addTransaction,
    deleteTransaction
};