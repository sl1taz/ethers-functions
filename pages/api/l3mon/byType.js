import A from './a.json';
import B from './b.json';

export default async function maindb(req, res) {
    const { clientID, clientCON, clientFilter } = req.query;
    if (!clientID) res.status(400).json({ errors: true, message: 'clientID is required' })
    const clients = {
        'd5ea4a7a3046cdb7': A,
        '22001e34f4ede519': B
    };
    // const response = await clients[clientID];
    let resp = [];
    const response = await clients[clientID]['cdb'][clientCON];
    const limit = [0, 1, 2, 3, 4];
    const r = await response.filter(d => {
        return d.appName === clientFilter || ''
    });
    const rr = limit.map((l) => {
        console.log(response[l])
        return response[l]
    })
    res.send(rr)

}
