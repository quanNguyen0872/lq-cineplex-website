import request from '~/utils/request';

export async function getUser(email) {
    if (email) {
        try {
            const res = await request.get(`dskhachhang/email/${email}`);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export const addKhachHang = async (khachhang) => {
    try {
        const res = await request.post('dskhachhang', khachhang);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const KhachHangService = {
    getUser,
    addKhachHang,
};

export default KhachHangService;
