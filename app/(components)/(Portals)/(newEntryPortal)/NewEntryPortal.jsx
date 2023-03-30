'use client'
import styles from './NewEntryPortal.module.css';
import PortalContainer from '../../(Portals)/(newEntryPortal)/(PortalContainer)/PortalContainer';
import PortalInput from '../../(Portals)/(newEntryPortal)/(PortalInput)/PortalInput';
import PopUpFooter from '../../(Portals)/(newEntryPortal)/(PopUpFooter)/PopUpFooter';

import { useSelector, useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen } from '../../../redux/slices/portalSlice';

const NewEntryPortal = ({ newEntryPortalType }) => {
    const dispatch = useDispatch();

    const entryUpdater = (value, valueType) => {
        dispatch(setNewEntryPortalDocument({value: value, type: valueType}));
    }

    console.log("test", newEntryPortalType)

    return (
        <PortalContainer >
            {
                newEntryPortalType === "company" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "name")} >
                            Company Name
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "companyPOC")} >
                            Company's POC
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "email")} >
                            Email
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "street")} >
                            Street
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => entryUpdater(value, "city")} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "state")} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "zipCode")} >
                                Zip Code
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "number")} >
                                Phone Number
                            </PortalInput>
                        </section>
                    </>
                ) :
                newEntryPortalType === "venue" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "name")} >
                            Venue
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "street")} >
                            Street
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => entryUpdater(value, "city")} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "state")} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "zipCode")} >
                                Zip Code
                            </PortalInput>
                        </section>
                    </>
                ):
                newEntryPortalType === "tech" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "name")} >
                            Employee's Name
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "email")} >
                            Email
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "street")} >
                            Street
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => entryUpdater(value, "city")} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "state")} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "zipCode")} >
                                Zip Code
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "number")} >
                                Phone Number
                            </PortalInput>
                        </section>
                    </>
                ):
                newEntryPortalType === "position" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "name")} >
                            Position
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "rate")} >
                            Rate
                        </PortalInput>
                    </>
                ):""
            }
            <PopUpFooter newEntryType={newEntryPortalType} />
        </PortalContainer>
    )
};

export default NewEntryPortal;