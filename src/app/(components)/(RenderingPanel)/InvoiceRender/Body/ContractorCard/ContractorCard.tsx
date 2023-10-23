'use client'
import styles from './ContractorCard.module.css'

import { InvoiceBodyContractorDay } from '../../../../../types/types'


const ContractorCard = ({
    name,
    days,
    total
}:{
    name: string,
    days: InvoiceBodyContractorDay[],
    total: number

}) => {
    //give a className to all the elements
    return (
        <section className={styles.contractorCard}>
          <h4 className={styles.cardHeader}>{name ? name : "Contractor's Name"}</h4>
          <table className={styles.workTable}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.tableHeader}>Date</th>
                <th className={styles.tableHeader}>Time</th>
                <th className={styles.tableHeader}>Position</th>
                <th className={styles.tableHeader}>Hrs</th>
                <th className={styles.tableHeader}>Rate</th>
                <th className={styles.tableHeader}>OT</th>
                <th className={styles.tableHeader}>Total</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day, i) => (
                <tr key={i} className={i === days.length - 1 ? styles.lastTableRow : styles.tableRow}>
                  <td className={styles.tableData}>{day.contractorDayDate}</td>
                  <td className={styles.tableData}>{`${day.contractorDayTimeIn} - ${day.contractorDayTimeOut}`}</td>
                  <td className={styles.tableData}>{day.contractorDayPosition}</td>
                  <td className={styles.tableData}>{day.contractorDayHours}</td>
                  <td className={styles.tableData}>{day.contractorDayRate}</td>
                  <td className={styles.tableData}>{day.contractorDayOT}</td>
                  <td className={styles.tableData}>{day.contractorDayTotal}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className={styles.tableFooter} >
              {/* Add a row for totals */}
              <tr className={styles.tableRow}>
                <td className={styles.tableData}></td>
                <td className={styles.tableData}></td>
                <td className={styles.tableData}></td>
                <td className={styles.tableData}>{}</td>
                <td className={styles.tableData}>{}</td>
                <td className={styles.tableData}>Total:</td>
                <td className={styles.tableTotal}>{total ? total : ""}</td>
              </tr>
            </tfoot>
          </table>
          <footer className={styles.bumper} />
        </section>
    );
};

export default ContractorCard;