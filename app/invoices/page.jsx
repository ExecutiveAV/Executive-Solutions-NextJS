import FileDisplay from "../(components)/(FileDisplay)/FileDisplay"
import Title from "../(components)/(Title)/Title"

const Invoices = () => {
    return (
        <main>
            <Title pathTo={'/'} >Executive AV</Title>
            <FileDisplay kind="invoices" />
        </main>
    )
}