var AgentBuddy = require('./models/agentbuddy');

function getAgents(res) {
    
    AgentBuddy.find(function (err, agents) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(agents); // return all agents in JSON format
    });
};

module.exports = function (app) {

        // api ---------------------------------------------------------------------
    // get all agents
    app.get('/api/agents/agentId/tracker', function (req, res) {
        // use mongoose to get all agent tracking info in the database
        getAgentTrackerDetails(res);
    });

function getAgentTrackerDetails(res) {
    agentTrackerDetails= {"stressLevel": 8, "NumberOfCalls": 23, "ActiveCallDuration": 50, "heartRate": 70}
    return res.json(agentTrackerDetails);

}
    // api ---------------------------------------------------------------------
    // get all agents
    app.get('/api/agents', function (req, res) {
        // use mongoose to get all agents in the database
        getAgents(res);
    });

   
    // create agent and send back all agents after creation
    app.post('/api/agents', function (req, res) {

        // create a agent, information comes from UI
        AgentBuddy.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the agents after you create another
            getAgents(res);
        });

    });

};
