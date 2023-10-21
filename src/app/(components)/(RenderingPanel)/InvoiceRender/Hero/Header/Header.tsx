const Header = ({ 
    invoiceNumber,
    venue,
    issueDate,
    paymentTerms,
    dueDate,
 }:{
    invoiceNumber: number,
    venue: string,
    issueDate: string,
    paymentTerms: string,
    dueDate: string,
 }) => {
    return (
        <section>
            <p>Invoice #2223_{invoiceNumber}</p>
            <p>Venue: {venue}</p>
            <p>Issue Date: {issueDate}</p>
            <p>Payment Terms: {paymentTerms}</p>
            <p>Due Date: {dueDate}</p>
        </section>
    );
};

export default Header;