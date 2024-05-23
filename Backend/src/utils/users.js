const users = []


export const addUser = (data) => {
    const idx = users.findIndex((e) => e.sessionId === data.sessionId)
    if(idx >= 0){
        return {status: true, user: users[idx], message: 'user session already exists'}
    } 
    users.push(data)
    return {status:true, user: users[idx]}
}