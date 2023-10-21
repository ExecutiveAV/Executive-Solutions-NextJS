//create a provider componer to wrap my appplcation with redux toolkit
import type { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

interface Props {
    children: ReactNode;
};

const ReduxProvider: FC<Props> = ({ children }) => {
    return <Provider store={store}>
            {children}
        </Provider>
};


export default ReduxProvider;