require("dotenv").config()
const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => console.log(`Port is running at ${PORT}`))

const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const messagingServiceSID = process.env.TWILIO_MESSAGE_SERVICE_SID
const twilioClient = require('twilio')(accountSID, authToken)

app.get("/", (req, res) => {
    res.send("hi")
})

app.post("/", (req, res) => {
    const { message, user: sender, type, members } = req.body

    if (type === "message.new") {
        members
            .filter((member) => member.userId !== sender.id)
            .forEach(({ user }) => {
                if (!user.online) {
                    twilioClient.messages.create({
                        body: `You have a new message from ${message.user.fullName} - ${message.text}`,
                        messagingServiceSid: messagingServiceSID,
                        to: user.phoneNumber,
                    })
                        .then(() => console.log("Message sent"))
                        .catch((error) => console.log(error))
                }
            })

        return res.status(200).send("Message sent successfully")
    }

    return res.status(200).send("Not a new message request")
})

app.use("/auth", authRoutes)