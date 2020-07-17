const Dialog = require('../models/dialog')
const Message = require('../models/message')
const { model } = require('../models/dialog')

module.exports.startDialog = async (req, res) => {
    const newDialog = await new Dialog({
        author: req.user.id,
        partner: req.body.partner
    })

    Dialog.findOne(
        {
            author: req.user.id,
            partner: req.body.partner
        },
        (err, dialog) => {
            if (dialog) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Такой диалог уже есть'
                })
            } else {
                newDialog.save().then()
                res.status(200)
            }
        }
    )


}

module.exports.getDialogs = async (req, res) => {
    let id = req.user.id
    let dialog = await (await Dialog
        .find()
        .or([{ author: id }, { partner: id }])
        .populate(['author', 'partner'])
    )
    res.status(200)
    res.send(dialog)
}



module.exports.create_message = async (req, res) => {

    let authorID = req.user.id,
        dialogID = req.params.dialogID,
        message_text = req.body.message_text

    const message = await new Message({
        message_text,
        author: authorID,
        dialog: dialogID
    })

    let updateDialog = await Dialog.findOneAndUpdate(
        { _id: dialogID },
        { $push: { messages: message._id } },
        { new: true }
    )

    message.save().then()
    res.status(200)
    res.send(message)



}


module.exports.getMessages = async (req, res) => {
    console.log(req.params.dialogID)
    let dialogID = req.params.dialogID

    let messagesDialog = await Dialog
        .findById({ _id: dialogID })
        .populate('messages')


    res.status(200)
    res.send(messagesDialog)
}

// module.exports.getMessages = async (req, res) => {
//     let userId = req.user.id,
//         partnerID = req.params.userId;

//     let messages = await Message.
//         find()
//         .or({ author: userId }, { partner: userId })
//         .populate(['author', 'partner'])

//     res.status(200)
//     res.send(messages)

// }