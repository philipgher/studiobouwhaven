const formatProjectName = (projetTitle) => projetTitle.replace(/ /g, '-').replace(/--/g, '-').replace(/,|&|(|)|!|'|"|`|’|‘|“|”|„|_/g, '').toLowerCase();

export default formatProjectName;
