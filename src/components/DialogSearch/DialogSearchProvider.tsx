import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import DialogSearch from ".";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";
import DialogSearchContext from "./DialogSearchContext";

const DialogSearchProvider: React.FunctionComponent = (props) => {
    const [open, setOpen] = useState(false);

    const history = useHistory<{ show_dialog_search?: boolean }>();

    const isSmallWindow = useIsSmallWindow();

    const actions = useMemo(() => ({
        show: () => setOpen(true),
        hide: () => setOpen(false),
    }), []);

    useEffect(() => {
        const { show_dialog_search, ...otherState } = history.location.state || {};
        if (open && !show_dialog_search) {
            history.push({
                ...history.location,
                state: {
                    ...history.location.state,
                    show_dialog_search: true
                }
            })
        } else {
            if (open) {
                return;
            }
            history.replace({
                ...history.location,
                state: {
                    ...otherState,
                },
            });
        }
    }, [open, history]);

    useEffect(() => {
        const unregister = history.listen((location, action) => {
            if (action === "POP") {
                actions.hide();
                const { show_dialog_search } = location.state || {};
                show_dialog_search ? actions.show() : actions.hide();
            }
        });
        return () => {
            unregister();
        }
    }, [history, actions]);

    useEffect(() => {
        if (!isSmallWindow) {
            actions.hide();
        }
    }, [isSmallWindow, actions])

    return (
        <DialogSearchContext.Provider value={actions}>
            {props.children}
            <DialogSearch open={open} />
        </DialogSearchContext.Provider>
    );
}

export default DialogSearchProvider;