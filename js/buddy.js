const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;                        //result object er vitore array deoya
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`; //
                                                   //duddy er key hocche email
                                                   //name o buddy er key but name er value abar akta object...tai name er key(title,first,last) neoya hoise
                                                   
        buddiesDiv.appendChild(p);
    }
}