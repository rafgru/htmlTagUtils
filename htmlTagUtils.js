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
        console.error('updateClassList: Element nie istnieje');
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

// To get element atributte

export const getElementAttribute = (element, attribute) => {
    if (!element) {
        console.error(`getAttribute: Element: ${element} - nie istnieje`);
        return;
    }
    const AttributeValue =  element.getAttribute(attribute);
    
    if(AttributeValue === null){
        console.log(`getElementAttribute: Atrybut ${attribute} - nie istnieje na danym elemencie: ${element}`)
    }

    return AttributeValue
}

