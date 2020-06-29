const getProductNameLink = (projetTitle) => `project/${projetTitle.replace(/ /g, '-').replace(/--/g, '-').replace(/,|&|(|)|!|'|"|`|’|‘|“|”|„|_/g, '').toLowerCase()}`;

export default getProductNameLink;
