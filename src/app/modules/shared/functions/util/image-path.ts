export function removeImgPath(imagePath: string | null, basePath: string) {
    if (!imagePath) return '';
    const regex = new RegExp(basePath, 'g');
    return imagePath.replace(regex, '');
}

export function setImgPath(imagePath: string, imageName: string | null) {
    if (!imageName) return '';
    return `${imagePath}${imageName}`;
}