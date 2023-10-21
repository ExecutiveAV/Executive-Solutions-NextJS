'use client'
import styles from "./Hero.module.css";

import { useSelector } from "react-redux";

import Header from "./Header/Header";
import PayableHeader from "./PayableHeader/PayableHeader";

//import invoiceNumber, venue, issueDate, paymentTerms, dueDate from invoice selectors
import { 
    invoiceNumberSelector,
    invoiceVenueSelector,
    invoiceIssuedDateSelector,
    invoicePaymentTermsSelector,
    invoiceDueDateSelector,
    invoicePayToNameSelector,
    invoicePayToAddressSelector,
    invoicePayToCitySelector,
    invoicePayToStateSelector,
    invoicePayToZipSelector,
    invoicePayToEmailSelector,
    invoiceBillToNameSelector,
    invoiceBillToAddressSelector,
    invoiceBillToCitySelector,
    invoiceBillToStateSelector,
    invoiceBillToZipSelector,
    invoiceBillToEmailSelector,
 } from "../../../../redux/selectors/invoiceSelectors";

const Hero = () => {

    const invoiceNumber = useSelector(invoiceNumberSelector);
    const venue = useSelector(invoiceVenueSelector);
    const issueDate = useSelector(invoiceIssuedDateSelector);
    const paymentTerms = useSelector(invoicePaymentTermsSelector);
    const dueDate = useSelector(invoiceDueDateSelector);

    const payToName = useSelector(invoicePayToNameSelector);
    const payToAddress = useSelector(invoicePayToAddressSelector);
    const payToCity = useSelector(invoicePayToCitySelector);
    const payToState = useSelector(invoicePayToStateSelector);
    const payToZip = useSelector(invoicePayToZipSelector);
    const payToEmail = useSelector(invoicePayToEmailSelector);

    const billToName = useSelector(invoiceBillToNameSelector);
    const billToAddress = useSelector(invoiceBillToAddressSelector);
    const billToCity = useSelector(invoiceBillToCitySelector);
    const billToState = useSelector(invoiceBillToStateSelector);
    const billToZip = useSelector(invoiceBillToZipSelector);
    const billToEmail = useSelector(invoiceBillToEmailSelector);


    return (
        <header className={styles.hero} >
            <section className={styles.headerTopContainer} >
                <Header invoiceNumber={invoiceNumber} venue={venue} issueDate={issueDate} paymentTerms={paymentTerms} dueDate={dueDate} />
            </section>
            <section className={styles.headerBottomContainer} >
                <section >
                    <PayableHeader type="Bill To" name={billToName} address={billToAddress} city={billToCity} state={billToState} zip={billToZip} email={billToEmail} />
                </section>
                <section >
                    <PayableHeader type="Payable" name={payToName} address={payToAddress} city={payToCity} state={payToState} zip={payToZip} email={payToEmail} />
                </section>
            </section>
        </header>
    );
};

export default Hero;