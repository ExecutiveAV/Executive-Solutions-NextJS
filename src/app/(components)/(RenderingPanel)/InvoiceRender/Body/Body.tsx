import styles from "./Body.module.css";

import ContractorCard from "./ContractorCard/ContractorCard";

import { InvoiceBodyContractor } from '../../../../types/types'

import { useSelector } from "react-redux";
import { invoiceBodyContractorsSelector } from "../../../../redux/selectors/invoiceSelectors";

const Body = () => {

    const contractors = useSelector(invoiceBodyContractorsSelector);
    console.log("contractors: ", contractors)

    const ContractorsTemp = () => contractors.map((contractor: InvoiceBodyContractor) => {
        return (
            <ContractorCard key={`${contractor.contractorTitle}_ID`} name={contractor.contractorTitle} days={contractor.contractorDays} total={contractor.contractorTotal} />
        );
    });

    return (
        <main className={styles.body}>
            {ContractorsTemp()}
        </main>
    )
};

export default Body;