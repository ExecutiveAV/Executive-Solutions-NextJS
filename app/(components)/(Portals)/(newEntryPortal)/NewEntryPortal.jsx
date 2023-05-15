'use client'
import styles from './NewEntryPortal.module.css';
import PortalContainer from '../../(Portals)/(newEntryPortal)/(PortalContainer)/PortalContainer';
import PortalInput from '../../(Portals)/(newEntryPortal)/(PortalInput)/PortalInput';
import PopUpFooter from '../../(Portals)/(newEntryPortal)/(PopUpFooter)/PopUpFooter';

import { useSelector, useDispatch } from 'react-redux';
import {
    newEntryKindSelector, newEntryCompanyNameValidationSelector, newEntryCompanyPOCValidationSelector, newEntryCompanyEmailValidationSelector, newEntryCompanyPhoneValidationSelector, newEntryCompanyAddressValidationSelector, newEntryCompanyCityValidationSelector, newEntryCompanyStateValidationSelector, newEntryCompanyZipValidationSelector, newEntryVenueNameValidationSelector, newEntryVenueAddressValidationSelector, newEntryVenueCityValidationSelector, newEntryVenueStateValidationSelector, newEntryVenueZipValidationSelector, newEntryContractorNameValidationSelector, newEntryContractorAddressValidationSelector, newEntryContractorCityValidationSelector, newEntryContractorStateValidationSelector, newEntryContractorZipValidationSelector, newEntryContractorEmailValidationSelector, newEntryContractorPhoneValidationSelector, newEntryPositionNameValidationSelector, newEntryPositionRateValidationSelector,
} from '../../../redux/selectors/newEntrySelectors';
import {
    setNewEntryCompanyName, setNewEntryCompanyAddress, setNewEntryCompanyAddress2, setNewEntryCompanyCity, setNewEntryCompanyState, setNewEntryCompanyZip, setNewEntryCompanyPOC, setNewEntryCompanyEmail, setNewEntryCompanyPhone, setNewEntryVenueName, setNewEntryVenueAddress, setNewEntryVenueAddress2, setNewEntryVenueCity, setNewEntryVenueState, setNewEntryVenueZip, setNewEntryContractorName, setNewEntryContractorAddress, setNewEntryContractorAddress2, setNewEntryContractorCity, setNewEntryContractorState, setNewEntryContractorZip, setNewEntryContractorEmail, setNewEntryContractorPhone, setNewEntryPositionName, setNewEntryPositionRate, checkNewEntryCompanyValidation, checkNewEntryContractorValidation, checkNewEntryPositionValidation, checkNewEntryVenueValidation
} from '../../../redux/slices/newEntrySlice';

const NewEntryPortal = () => {

    const dispatch = useDispatch();

    const newEntryPortalType = useSelector(newEntryKindSelector);
    const companyNameValidated = useSelector(newEntryCompanyNameValidationSelector);
    const companyPOCValidated = useSelector(newEntryCompanyPOCValidationSelector);
    const companyEmailValidated = useSelector(newEntryCompanyEmailValidationSelector);
    const companyPhoneValidated = useSelector(newEntryCompanyPhoneValidationSelector);
    const companyAddressValidated = useSelector(newEntryCompanyAddressValidationSelector);
    const companyCityValidated = useSelector(newEntryCompanyCityValidationSelector);
    const companyStateValidated = useSelector(newEntryCompanyStateValidationSelector);
    const companyZipValidated = useSelector(newEntryCompanyZipValidationSelector);

    const venueNameValidated = useSelector(newEntryVenueNameValidationSelector);
    const venueAddressValidated = useSelector(newEntryVenueAddressValidationSelector);
    const venueCityValidated = useSelector(newEntryVenueCityValidationSelector);
    const venueStateValidated = useSelector(newEntryVenueStateValidationSelector);
    const venueZipValidated = useSelector(newEntryVenueZipValidationSelector);

    const contractorNameValidated = useSelector(newEntryContractorNameValidationSelector);
    const contractorAddressValidated = useSelector(newEntryContractorAddressValidationSelector);
    const contractorCityValidated = useSelector(newEntryContractorCityValidationSelector);
    const contractorStateValidated = useSelector(newEntryContractorStateValidationSelector);
    const contractorZipValidated = useSelector(newEntryContractorZipValidationSelector);
    const contractorEmailValidated = useSelector(newEntryContractorEmailValidationSelector);
    const contractorPhoneValidated = useSelector(newEntryContractorPhoneValidationSelector);

    const positionNameValidated = useSelector(newEntryPositionNameValidationSelector);
    const positionRateValidated = useSelector(newEntryPositionRateValidationSelector);

    return (
        <PortalContainer >
            {
                newEntryPortalType === "company" ?
                (
                    <>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryCompanyName(value))
                            dispatch(checkNewEntryCompanyValidation())
                        }} validated={companyNameValidated} >
                            Company Name
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryCompanyPOC(value))
                            dispatch(checkNewEntryCompanyValidation())
                        }} validated={companyPOCValidated} >
                            Company's POC
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryCompanyEmail(value))
                            dispatch(checkNewEntryCompanyValidation())
                        }} validated={companyEmailValidated} >
                            Email
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryCompanyAddress(value))
                            dispatch(checkNewEntryCompanyValidation())
                        }} validated={companyAddressValidated} >
                            Street
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(checkNewEntryCompanyValidation())
                        }} validated={companyAddressValidated} >
                            Street 2
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => {
                                dispatch(setNewEntryCompanyCity(value))
                                dispatch(checkNewEntryCompanyValidation())
                            }} validated={companyCityValidated} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => {
                                dispatch(setNewEntryCompanyState(value))
                                dispatch(checkNewEntryCompanyValidation())
                            }} validated={companyStateValidated} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => {
                                dispatch(setNewEntryCompanyZip(value))
                                dispatch(checkNewEntryCompanyValidation())
                            }} validated={companyZipValidated} >
                                Zip Code
                            </PortalInput>
                            <PortalInput updater={value => {
                                dispatch(setNewEntryCompanyPhone(value))
                                dispatch(checkNewEntryCompanyValidation())
                            }} validated={companyPhoneValidated} >
                                Phone Number
                            </PortalInput>
                        </section>
                    </>
                ) :
                newEntryPortalType === "venue" ?
                (
                    <>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryVenueName(value))
                            dispatch(checkNewEntryVenueValidation())
                        }} validated={venueNameValidated} >
                            Venue
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryVenueAddress(value))
                            dispatch(checkNewEntryVenueValidation())
                        }} validated={venueAddressValidated} >
                            Street
                        </PortalInput>
                        <PortalInput updater={value => {
                            dispatch(setNewEntryVenueAddress2(value))
                            dispatch(checkNewEntryVenueValidation())
                        }} >
                            Street 2
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => {
                                dispatch(setNewEntryVenueCity(value))
                                dispatch(checkNewEntryVenueValidation())
                            }} validated={venueCityValidated} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => {
                                dispatch(setNewEntryVenueState(value))
                                dispatch(checkNewEntryVenueValidation())
                            }} validated={venueStateValidated} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => {
                                dispatch(setNewEntryVenueZip(value))
                                dispatch(checkNewEntryVenueValidation())
                            }} validated={venueZipValidated} >
                                Zip Code
                            </PortalInput>
                        </section>
                    </>
                ):
                newEntryPortalType === "contractor" ?
                (
                    <>
                        <PortalInput updater={value => dispatch(setNewEntryContractorName(value))} validated={contractorNameValidated} >
                            Employee's Name
                        </PortalInput>
                        <PortalInput updater={value => dispatch(setNewEntryContractorEmail(value))} validated={contractorEmailValidated} >
                            Email
                        </PortalInput>
                        <PortalInput updater={value => dispatch(setNewEntryContractorAddress(value))} validated={contractorAddressValidated} >
                            Street
                        </PortalInput>
                        <PortalInput updater={value => dispatch(setNewEntryContractorAddress2(value))} >
                            Street 2
                        </PortalInput>
                        <section className={styles.address} >
                            <PortalInput updater={value => dispatch(setNewEntryContractorCity(value))} validated={contractorCityValidated} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => dispatch(setNewEntryContractorState(value))} validated={contractorStateValidated} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => dispatch(setNewEntryContractorZip(value))} validated={contractorZipValidated} >
                                Zip Code
                            </PortalInput>
                            <PortalInput updater={value => dispatch(setNewEntryContractorPhone(value))} validated={contractorPhoneValidated} >
                                Phone Number
                            </PortalInput>
                        </section>
                    </>
                ):
                newEntryPortalType === "position" ?
                (
                    <>
                        <PortalInput updater={value => dispatch(setNewEntryPositionName(value))} validated={positionNameValidated} >
                            Position
                        </PortalInput>
                        <PortalInput updater={value => dispatch(setNewEntryPositionRate(value))} validated={positionRateValidated} >
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