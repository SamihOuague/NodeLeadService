const Model = require("./Model");

module.exports = {
    listLeads: (req, res) => {
        Model.find({}, (err, docs) => {
            if (err) res.send({ err });
            else res.send({ docs });
        });
    },
    getLead: (req, res) => {

    },
    addLead: (req, res) => {
        let { lastname, firstname, email, phone, message } = req.body;
        console.log(req.body);
        if (lastname && firstname && email && phone && message) {
            let lead = new Model({
                lastname,
                firstname,
                email,
                phone,
                message
            });
            lead.save((err) => {
                if (err) res.send({ err });
                else res.send({ success: true });
            });
        } else res.send({ msg: "invalid request." })
        
    },
    updateLead: (req, res) => {

    },
    deleteLead: (req, res) => {

    }
}