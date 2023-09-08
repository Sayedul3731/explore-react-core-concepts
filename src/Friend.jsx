export default function Friend(friend){
    const {name, email} = friend.friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}