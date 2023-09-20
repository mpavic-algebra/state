export default function UserFunction({name, years, changeName}) {
    return (
        <>
            <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
            <input type="text"  onChange={changeName}/>
        </>
    )
}