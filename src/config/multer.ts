import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

// Define o diretório onde as imagens serão salvas.
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    // O diretório para onde o Multer deve enviar os arquivos.
    directory: uploadFolder,

    // Define como os arquivos serão armazenados.
    storage: multer.diskStorage({
        destination: uploadFolder,
        // Garante que cada arquivo tenha um nome único para evitar sobreposição.
        filename(request, file, callback) {
            // Gera 10 bytes de caracteres hexadecimais aleatórios.
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = fileHash + '-' + file.originalname;

            callback(null, fileName);
        },
    }),
};