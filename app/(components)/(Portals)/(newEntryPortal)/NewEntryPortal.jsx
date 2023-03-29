'use client'
import { useSelector, useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen } from '../../../../redux/slices/newEntryPortalSlice';

const NewEntryPortal = ({ newEntryType }) => {
    const { newEntryPortalType } = useSelector(state => state.newEntryPortal);
    const dispatch = useDispatch();

    const entryUpdater = (value, valueType) => {
        dispatch(setNewEntryPortalDocument({value: value, type: valueType}));
    }

    

    return (
        <PortalContainer >
            {
                newEntryType === "company" ?
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
                        <section className='address' >
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
                newEntryType === "venue" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "name")} >
                            Venue
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "street")} >
                            Street
                        </PortalInput>
                        <section className='address' >
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
                newEntryType === "tech" ?
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
                        <section className='address' >
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
                newEntryType === "position" ?
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