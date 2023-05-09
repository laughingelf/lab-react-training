

const Greeting = ({ lang, children }) => {

    let salutation

    switch (lang) {
        case 'de':
            salutation = 'Hallo'
            break;
        case 'fr':
            salutation = 'Bonjoir'
            break;
        case 'en':
            salutation = 'Hello'
            break;
        case 'es':
            salutation = 'Hola'
            break;
        default:
            break;
    }

    return (
        <div>
            <p>{salutation} {children}</p>
        </div >
    )
}

export default Greeting