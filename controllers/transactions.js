const Transaction = require('../models/Transaction')

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    try {
        console.log('Here!!');
        const transactions = await Transaction.find();
        console.log('But not here.')
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}


// @desc    Add transactions
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transactions');
}

// @desc    Delete transactions
// @route   GET /api/v1/transactions:id
// @access  Public
exports.deletetTransactions = async (req, res, next) => {
    res.send('DELETE transactions');
}