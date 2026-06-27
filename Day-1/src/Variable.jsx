function Variable(){
    const college='I dont have college';
    let semester=5;
    semester+=1;
    const language=['Java'];
    language.push("C");
    return(
        <>
        <header>
            <p className="dikshya">{college} </p>

            </header>
            <section>
                <b>Current in semester {semester}</b><br></br>
                <b>Programming language {language.join(",")}</b>
                
            </section>
        </>
    );
}
export default Variable;