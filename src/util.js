const util = {
    fetchElement: elementId => document.getElementById(elementId),
    onClick: (elementId, action) => {
        document
            .getElementById(elementId)
            .addEventListener('click', action);
    },
};

export default util;