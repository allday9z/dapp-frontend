# วิธี Commit งานขึ้น Git

## ขั้นตอน (ทำครั้งแรกเท่านั้น)

เปิด Terminal แล้วพิมพ์:

```bash
source ~/.zshrc
```

---

## การ Commit + Push

```bash
gacp "ประเภท: อธิบายสิ่งที่แก้ไข"
```

### ตัวอย่าง

```bash
gacp "fix: แก้ layout หน้า homepage"
gacp "feat: เพิ่ม component TradeIn"
gacp "style: ปรับสี button"
gacp "chore: อัปเดตข้อมูลสินค้า"
```

---

## ประเภท Commit ที่ใช้บ่อย

| ประเภท | ใช้เมื่อ |
|--------|---------|
| `fix` | แก้บัก หรือแก้ให้ถูกต้อง |
| `feat` | เพิ่ม feature ใหม่ |
| `style` | แก้ CSS / สี / ขนาด |
| `chore` | แก้ข้อมูล / config / ไม่ใช่โค้ด |

---

## หาก Error

| ข้อความ | วิธีแก้ |
|---------|---------|
| `ใส่ข้อความ commit ด้วยครับ` | ลืมใส่ข้อความในเครื่องหมาย `" "` |
| `ไม่ได้อยู่ใน git repository` | เปิด terminal ผิดโฟลเดอร์ |
| `git commit ล้มเหลว` | ไม่มีไฟล์ที่เปลี่ยนแปลง |
| `git push ล้มเหลว` | เช็ค internet หรือบอก senior |
