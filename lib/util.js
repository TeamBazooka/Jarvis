
module.exports = {
  reply: (msg, text) => msg.envelope.user.root_id.length === 0 ? msg.send(text) : msg.reply(text)
}
