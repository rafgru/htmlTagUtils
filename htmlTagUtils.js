// To get one tag

export const oneTagPicker = (tag) => {
    const pickedTag = document.querySelector(tag)
    return pickedTag
}

// To get tag collection

export const tagCollectionPicker = (tags) => {
    const tagCollection = document.querySelectorAll(tags)
    return tagCollection 
}

// To update tag class list

export const updateClassList = (element, action, className) => {
    if (!element) {
        console.error('Element nie istnieje');
        return;
    }

    switch(action) {
        case 'add':
            element.classList.add(className);
            break;
        case 'remove':
            element.classList.remove(className);
            break;
        case 'toggle':
            element.classList.toggle(className);
            break;
        default:
            console.error(`Nieznana akcja: ${action}`);
    }
};

