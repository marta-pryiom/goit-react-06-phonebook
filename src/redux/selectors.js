export const filterValue = state => state.filter;
export const getContacts = state => state.items;
export const getVisibleContact = state => {
    const normalizedFilter = filterValue(state).toLowerCase();
    const filteredContacts = getContacts(state).filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
};
