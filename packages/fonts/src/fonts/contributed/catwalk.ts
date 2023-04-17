import { FontFile } from '../../FontFile';

const catwalk = new FontFile(
    'catwalk',
    'ZmxmMmEkIDggNyAyMCAtMSAyCkNBVFdBTEsgYnkgUm9uIEZyaXR6IDgvOTQKRmlnbGV0IFJlbGVhc2UgMi8wCiRACiRACiRACiRACiRACiRACiRACiBAQApfLy9ACl8vL0AKXy8vQApfLyBACl8vIEAKICAgQApfLy9ACiAgIEBACl8vIF8vQApfLyBfL0AKICAgICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEBACiAgICAgICAgICAgICBACiAgXy8vICAgXy8vICBACl8vLy8vLy8gXy8vLy9ACiAgXy8vICAgXy8vICBACiAgXy8vICAgXy8vICBACl8vLy8vLy8gXy8vLy9ACiAgXy8vICAgXy8vICBACiAgICAgICAgICAgICBAQAogICBfLy8gIEAKIF8vLyBfLy9ACl8vLyAgICAgQAogIF8vLyAgIEAKICAgICBfLy9ACl8vLyBfLy8gQAogIF8vLyAgIEAKICAgICAgICBAQAogICAgICAgICAgQAogXy8vICBfLy8gQAogICAgIF8vLyAgQAogICAgXy8vICAgQAogICBfLy8gICAgQAogIF8vLyAgICAgQAogXy8vICBfLy8gQAogICAgICAgICAgQEAKICAgXy8gICBACiBfLy8gXy8vQApfLy8gICAgIEAKIF8vLy8gICBACl8vLyAgICAgQAogXy8vIF8vL0AKICAgXy8gICBACiAgICAgICAgQEAKXy8vQAogXy9ACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBAQAogIF8vL0AKIF8vLyBACl8vLyAgQApfLy8gIEAKXy8vICBACiBfLy8gQAogIF8vL0AKICAgICBAQAogXy8vICBACiAgXy8vIEAKICAgXy8vQAogICBfLy9ACiAgIF8vL0AKICBfLy8gQAogXy8vICBACiAgICAgIEBACiAgICAgIF8vLyAgICAgQAogXy8vICBfLy8gIF8vL0AKICAgXy8gXy8gXy8vICBACl8vLy8vIF8vLy8vLy8vQAogICBfLyBfLyBfLy8gIEAKIF8vLyAgXy8vICBfLy9ACiAgICAgIF8vLyAgICAgQAogICAgICAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgIF8vLyAgIEAKICAgICBfLy8gICBACl8vLy8gXy8vLy8vQAogICAgIF8vLyAgIEAKICAgICBfLy8gICBACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBACl8vL0AKIF8vQEAKICAgICAgQAogICAgICBACiAgICAgIEAKXy8vLy8vQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBAQAogICBACiAgIEAKICAgQAogICBACiAgIEAKICAgQApfLy9ACiAgIEBACiAgICAgICBfLy9ACiAgICAgIF8vLyBACiAgICAgXy8vICBACiAgICBfLy8gICBACiAgIF8vLyAgICBACiAgXy8vICAgICBACiBfLy8gICAgICBACiAgICAgICAgICBAQAogICAgICAgICAgICBACiAgICBfLy8gICAgIEAKICBfLy8gIF8vLyAgQApfLy8gICAgIF8vLyBACl8vLyAgICAgIF8vL0AKIF8vLyAgICBfLy8gQAogICBfLy8vICAgICBACiAgICAgICAgICAgIEBACiAgICAgIEAKIF8vLyAgQAogIF8vLyBACiAgXy8vIEAKICBfLy8gQAogIF8vLyBACl8vLy8vL0AKICAgICAgQEAKICAgICAgICAgICBACiAgXy8vIF8vICAgQAogXy8gICAgIF8vL0AKICAgICAgXy8vICBACiAgICBfLy8gICAgQAogIF8vLyAgICAgIEAKIF8vLy8vLy8vLyBACiAgICAgICAgICAgQEAKICAgICAgICAgQApfLy8gXy8vICBACiAgIF8vLyAgIEAKIF8vLyAgICAgQAogICAgXy8vICBACiAgICAgIF8vL0AKXy8vLy8vICAgQAogICAgICAgICBAQAogICAgICAgICAgICBACiAgICAgIF8vLyAgIEAKICAgIF8gXy8vICAgQAogICBfLyBfLy8gICBACiBfLy8gIF8vLyAgIEAKXy8vLy8gXy8gXy8vQAogICAgICBfLy8gICBACiAgICAgICAgICAgIEBACiAgICAgICAgIEAKXy8vIF8vLy8gQApfLy8gICAgICBACl8vLy8gICAgIEAKICAgIF8vLyAgQAogICAgICBfLy9ACl8vLy8gXy8vIEAKICAgICAgICAgQEAKICAgICAgICAgICBACiAgICBfLy8gICAgQAogICBfLy8gICAgIEAKICBfLy8gICAgICBACl8vICAgIF8vLyAgQApfLy8gICAgIF8vL0AKICBfLy8gXy8vICBACiAgICAgICAgICAgQEAKICAgICAgICAgIEAKXy8vLy8vIF8vL0AKICAgICAgXy8vIEAKICAgICBfLy8gIEAKICAgIF8vLyAgIEAKICAgIF8vLyAgIEAKICAgIF8vLyAgIEAKICAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgXy8gICAgIEAKIF8vLyAgXy8vICBACl8vLyAgICAgXy8gQAogIF8vLyBfLyAgIEAKXy8vICAgICBfLy9ACiAgXy8vLy8gICAgQAogICAgICAgICAgIEBACiAgICAgICAgICAgIEAKICAgXy8gXy8vICAgQAogXy8vICAgICBfLy9ACl8vICAgICAgXy8vIEAKICBfLyAgXy8vICAgQAogICAgIF8vLyAgICBACiAgIF8vLyAgICAgIEAKICAgICAgICAgICAgQEAKICAgQAogICBACiAgIEAKICAgQApfLy9ACiAgIEAKXy8vQAogICBAQAogICBACiAgIEAKICAgQAogICBACl8vL0AKICAgQApfLy9ACiBfL0BACiAgICAgIF8vL0AKICAgIF8vLyAgQAogIF8vLyAgICBACl8vLyAgICAgIEAKICBfLy8gICAgQAogICAgXy8vICBACiAgICAgIF8vL0AKICAgICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKXy8vLy8vL0AKICAgICAgIEAKXy8vLy8vL0AKICAgICAgIEAKICAgICAgIEAKICAgICAgIEBACl8vLyAgICAgIEAKICBfLy8gICAgQAogICAgXy8vICBACiAgICAgIF8vL0AKICAgIF8vLyAgQAogIF8vLyAgICBACl8vLyAgICAgIEAKICAgICAgICAgQEAKXy8vLyAgICBACiAgICBfLy8gQAogICAgIF8vL0AKICAgIF8vLyBACiBfLy8gICAgQAogICAgICAgIEAKIF8vLyAgICBACiAgICAgICAgQEAKICAgICAgICAgICAgIEAKICAgIF8vLy8gICAgIEAKICBfLyAgICBfLy8gIEAKIF8vICBfLy8gIF8vL0AKXy8vIF8vL18gIF8vL0AKIF8vLyAgIGBgYCAgIEAKICAgIF8vLyAgICAgIEAKICAgICAgICAgICAgIEBACiAgICAgIF8vICAgICAgIEAKICAgICBfLyAvLyAgICAgQAogICAgXy8gIF8vLyAgICBACiAgIF8vLyAgIF8vLyAgIEAKICBfLy8vLy8vIF8vLyAgQAogXy8vICAgICAgIF8vLyBACl8vLyAgICAgICAgIF8vL0AKICAgICAgICAgICAgICAgQEAKXy8vIF8vLyAgIEAKXy8gICAgXy8vIEAKXy8gICAgIF8vL0AKXy8vLyBfLyAgIEAKXy8gICAgIF8vL0AKXy8gICAgICBfL0AKXy8vLy8gXy8vIEAKICAgICAgICAgIEBACiAgICBfLy8gICBACiBfLy8gICBfLy9ACl8vLyAgICAgICBACl8vLyAgICAgICBACl8vLyAgICAgICBACiBfLy8gICBfLy9ACiAgIF8vLy8vICBACiAgICAgICAgICBAQApfLy8vLy8gICAgQApfLy8gICBfLy8gQApfLy8gICAgXy8vQApfLy8gICAgXy8vQApfLy8gICAgXy8vQApfLy8gICBfLy8gQApfLy8vLy8gICAgQAogICAgICAgICAgQEAKXy8vLy8vLy8vQApfLy8gICAgICBACl8vLyAgICAgIEAKXy8vLy8vLyAgQApfLy8gICAgICBACl8vLyAgICAgIEAKXy8vLy8vLy8vQAogICAgICAgICBAQApfLy8vLy8vLy9ACl8vLyAgICAgIEAKXy8vICAgICAgQApfLy8vLy8vICBACl8vLyAgICAgIEAKXy8vICAgICAgQApfLy8gICAgICBACiAgICAgICAgIEBACiAgIF8vLy8vICAgQAogXy8gICAgXy8vIEAKXy8vICAgICAgICBACl8vLyAgICAgICAgQApfLy8gICBfLy8vL0AKIF8vLyAgICBfLyBACiAgXy8vLy8vICAgQAogICAgICAgICAgIEBACl8vLyAgICAgXy8vQApfLy8gICAgIF8vL0AKXy8vICAgICBfLy9ACl8vLy8vLy8gXy8vQApfLy8gICAgIF8vL0AKXy8vICAgICBfLy9ACl8vLyAgICAgXy8vQAogICAgICAgICAgIEBACl8vL0AKXy8vQApfLy9ACl8vL0AKXy8vQApfLy9ACl8vL0AKICAgQEAKICAgICBfLy9ACiAgICAgXy8vQAogICAgIF8vL0AKICAgICBfLy9ACiAgICAgXy8vQApfLyAgIF8vL0AKIF8vLy8vICBACiAgICAgICAgQEAKXy8vICAgXy8vICBACl8vLyAgXy8vICAgQApfLy8gXy8vICAgIEAKXy8gXy8gICAgICBACl8vLyAgXy8vICAgQApfLy8gICBfLy8gIEAKXy8vICAgICBfLy9ACiAgICAgICAgICAgQEAKXy8vICAgICAgQApfLy8gICAgICBACl8vLyAgICAgIEAKXy8vICAgICAgQApfLy8gICAgICBACl8vLyAgICAgIEAKXy8vLy8vLy8vQAogICAgICAgICBAQApfLy8gICAgICAgXy8vQApfLyBfLy8gICBfLy8vQApfLy8gXy8vIF8gXy8vQApfLy8gIF8vLyAgXy8vQApfLy8gICBfLyAgXy8vQApfLy8gICAgICAgXy8vQApfLy8gICAgICAgXy8vQAogICAgICAgICAgICAgQEAKXy8vLyAgICAgXy8vQApfLyBfLy8gICBfLy9ACl8vLyBfLy8gIF8vL0AKXy8vICBfLy8gXy8vQApfLy8gICBfLyBfLy9ACl8vLyAgICBfLyAvL0AKXy8vICAgICAgXy8vQAogICAgICAgICAgICBAQAogICAgXy8vLy8gICAgIEAKICBfLy8gICAgXy8vICBACl8vLyAgICAgICAgXy8vQApfLy8gICAgICAgIF8vL0AKXy8vICAgICAgICBfLy9ACiAgXy8vICAgICBfLy8gQAogICAgXy8vLy8gICAgIEAKICAgICAgICAgICAgICBAQApfLy8vLy8vLyAgQApfLy8gICAgXy8vQApfLy8gICAgXy8vQApfLy8vLy8vLyAgQApfLy8gICAgICAgQApfLy8gICAgICAgQApfLy8gICAgICAgQAogICAgICAgICAgQEAKICAgIF8vLy8vICAgIEAKICBfLy8gICAgXy8vIEAKXy8vICAgICAgIF8vL0AKXy8vICAgICAgIF8vL0AKXy8vICAgICAgIF8vL0AKICBfLy8gXy8gXy8vIEAKICAgIF8vLyAvLyAgIEAKICAgICAgICAgXy8gIEBACl8vLy8vLy8vICAgIEAKXy8vICAgIF8vLyAgQApfLy8gICAgXy8vICBACl8vIF8vLyAgICAgIEAKXy8vICBfLy8gICAgQApfLy8gICAgXy8vICBACl8vLyAgICAgIF8vL0AKICAgICAgICAgICAgQEAKICBfLy8gLy8gIEAKXy8vICAgIF8vL0AKIF8vLyAgICAgIEAKICAgXy8vICAgIEAKICAgICAgXy8vIEAKXy8vICAgIF8vL0AKICBfLy8gLy8gIEAKICAgICAgICAgIEBACl8vLy8gXy8vLy8vL0AKICAgICBfLy8gICAgQAogICAgIF8vLyAgICBACiAgICAgXy8vICAgIEAKICAgICBfLy8gICAgQAogICAgIF8vLyAgICBACiAgICAgXy8vICAgIEAKICAgICAgICAgICAgQEAKXy8vICAgICBfLy9ACl8vLyAgICAgXy8vQApfLy8gICAgIF8vL0AKXy8vICAgICBfLy9ACl8vLyAgICAgXy8vQApfLy8gICAgIF8vL0AKICBfLy8vLy8gICBACiAgICAgICAgICAgQEAKXy8vICAgICAgICAgXy8vQAogXy8vICAgICAgIF8vLyBACiAgXy8vICAgICBfLy8gIEAKICAgXy8vICAgXy8vICAgQAogICAgXy8vIF8vLyAgICBACiAgICAgXy8vLy8gICAgIEAKICAgICAgXy8vICAgICAgQAogICAgICAgICAgICAgICBAQApfLy8gICAgICAgIF8vL0AKXy8vICAgICAgICBfLy9ACl8vLyAgIF8vICAgXy8vQApfLy8gIF8vLyAgIF8vL0AKXy8vIF8vIF8vLyBfLy9ACl8vIF8vICAgIF8vLy8vQApfLy8gICAgICAgIF8vL0AKICAgICAgICAgICAgICBAQApfLy8gICAgICBfLy9ACiBfLy8gICBfLy8gIEAKICBfLy8gXy8vICAgQAogICAgXy8vICAgICBACiAgXy8vIF8vLyAgIEAKIF8vLyAgIF8vLyAgQApfLy8gICAgICBfLy9ACiAgICAgICAgICAgIEBACl8vLyAgICAgIF8vL0AKIF8vLyAgICBfLy8gQAogIF8vLyBfLy8gICBACiAgICBfLy8gICAgIEAKICAgIF8vLyAgICAgQAogICAgXy8vICAgICBACiAgICBfLy8gICAgIEAKICAgICAgICAgICAgQEAKXy8vLy8vLy8gXy8vQAogICAgICAgXy8vICBACiAgICAgIF8vLyAgIEAKICAgIF8vLyAgICAgQAogICBfLy8gICAgICBACiBfLy8gICAgICAgIEAKXy8vLy8vLy8vLy8vQAogICAgICAgICAgICBAQApfLy8vL0AKXy8vICBACl8vLyAgQApfLy8gIEAKXy8vICBACl8vLyAgQApfLy8vL0AKICAgICBAQApfLy8gICAgICBACiBfLy8gICAgIEAKICBfLy8gICAgQAogICBfLy8gICBACiAgICBfLy8gIEAKICAgICBfLy8gQAogICAgICBfLy9ACiAgICAgICAgIEBACl8vLy8vQAogIF8vL0AKICBfLy9ACiAgXy8vQAogIF8vL0AKICBfLy9ACl8vLy8vQAogICAgIEBACiAgICBfLy8gICAgQAogIF8vLyBfLy8gIEAKXy8vICAgICBfLy9ACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKXy8vLy8vQEAKXy8vQApfLyBACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBAQAogICAgICAgICAgQAogICAgICAgICAgQAogICBfLy8gICAgQAogXy8vICBfLy8gQApfLy8gICBfLy8gQApfLy8gICBfLy8gQAogIF8vLyBfLy8vQAogICAgICAgICAgQEAKXy8vICAgICAgQApfLy8gICAgICBACl8vLyAgICAgIEAKXy8vIF8vLyAgQApfLy8gICBfLy9ACl8vLyAgIF8vL0AKXy8vIF8vLyAgQAogICAgICAgICBAQAogICAgICAgQAogICAgICAgQAogICBfLy8vQAogXy8vICAgQApfLy8gICAgQAogXy8vICAgQAogICBfLy8vQAogICAgICAgQEAKICAgICBfLy9ACiAgICAgXy8vQAogICAgIF8vL0AKIF8vLyBfLy9ACl8vICAgXy8vQApfLyAgIF8vL0AKIF8vLyBfLy9ACiAgICAgICAgQEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgXy8vICAgIEAKIF8vICAgXy8vIEAKXy8vLy8vIF8vL0AKXy8gICAgICAgIEAKICBfLy8vLyAgIEAKICAgICAgICAgIEBACiAgICBfLy9ACiAgXy8gICBACl8vXy8gXy9ACiAgXy8vICBACiAgXy8vICBACiAgXy8vICBACiAgXy8vICBACiAgICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKICAgXy8vICAgQAogXy8vICBfLy9ACl8vLyAgIF8vL0AKIF8vLyAgXy8vQAogICAgIF8vLyBACiAgXy8vICAgIEBACiAgICAgICAgQApfLy8gICAgIEAKXy8vICAgICBACl8vIF8vICAgQApfLy8gIF8vL0AKXy8gICBfLy9ACl8vLyAgXy8vQAogICAgICAgIEBACiAgIEAKIF8vQAogICBACl8vL0AKXy8vQApfLy9ACl8vL0AKICAgQEAKICAgICAgQAogICBfLy9ACiAgICAgIEAKICAgXy8vQAogICBfLy9ACiAgIF8vL0AKICAgXy8vQApfLy8vICBAQApfLy8gICAgIEAKXy8vICAgICBACl8vLyAgXy8vQApfLy8gXy8vIEAKXy9fLy8gICBACl8vLyBfLy8gQApfLy8gIF8vL0AKICAgICAgICBAQAogXy8vQAogXy8vQAogXy8vQAogXy8vQAogXy8vQAogXy8vQApfLy8vQAogICAgQEAKICAgICAgICAgICAgIEAKICAgICAgICAgICAgIEAKXy8vLyBfLy8gXy8vIEAKIF8vLyAgXy8gIF8vL0AKIF8vLyAgXy8gIF8vL0AKIF8vLyAgXy8gIF8vL0AKXy8vLyAgXy8gIF8vL0AKICAgICAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQApfLy8gXy8vICBACiBfLy8gIF8vL0AKIF8vLyAgXy8vQAogXy8vICBfLy9ACl8vLy8gIF8vL0AKICAgICAgICAgQEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgXy8vICAgIEAKIF8vLyAgXy8vIEAKXy8vICAgIF8vL0AKIF8vLyAgXy8vIEAKICAgXy8vICAgIEAKICAgICAgICAgIEBACiAgICAgICAgQAogICAgICAgIEAKXy8gXy8vICBACl8vICBfLy8gQApfLyAgIF8vL0AKXy8vIF8vLyBACl8vLyAgICAgQApfLy8gICAgIEBACiAgICAgICAgQAogICAgICAgIEAKICBfLy8gICBACl8vICBfLy8gQApfLyAgXy8vIEAKIF8vL18vLyBACiAgICBfLy8gQAogICAgXy8vL0BACiAgICAgICBACiAgICAgICBACl8vIF8vLy9ACiBfLy8gICBACiBfLy8gICBACiBfLy8gICBACl8vLy8gICBACiAgICAgICBAQAogICAgICAgQAogICAgICAgQAogXy8vLy8gQApfLy8gICAgQAogIF8vLy8gQAogICAgXy8vQApfLy8gXy8vQAogICAgICAgQEAKICBfLy8gIEAKICBfLy8gIEAKXy9fLyBfL0AKICBfLy8gIEAKICBfLy8gIEAKICBfLy8gIEAKICAgXy8vIEAKICAgICAgIEBACiAgICAgICAgQAogICAgICAgIEAKXy8vICBfLy9ACl8vLyAgXy8vQApfLy8gIF8vL0AKXy8vICBfLy9ACiAgXy8vXy8vQAogICAgICAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKXy8vICAgICBfLy9ACiBfLy8gICBfLy8gQAogIF8vLyBfLy8gIEAKICAgXy9fLy8gICBACiAgICBfLy8gICAgQAogICAgICAgICAgIEBACiAgICAgICAgICAgIEAKICAgICAgICAgICAgQApfLy8gICAgIF8vLy9ACiBfLy8gIC8gIF8vL0AKIF8vLyBfLyAgXy8vQAogXy8gXy8gXy9fLy9ACl8vLy8gICAgXy8vL0AKICAgICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACl8vLyAgIF8vL0AKICBfLyBfLy8gQAogICBfLyAgICBACiBfLyAgXy8vIEAKXy8vICAgXy8vQAogICAgICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKXy8vICAgXy8vQAogXy8vIF8vLyBACiAgIF8vLy8gIEAKICAgIF8vLyAgQAogICBfLy8gICBACiBfLy8gICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQApfLy8vLyBfLy9ACiAgICAgXy8vIEAKICAgXy8vICAgQAogIF8vLyAgICBACl8vLy8vLy8vL0AKICAgICAgICAgQEAKICAgICBfLy9ACiAgXy8vICAgQAogIF8vLyAgIEAKXy8vLyAgICBACiAgXy8vICAgQAogIF8vLyAgIEAKICAgICBfLy9ACiAgICAgICAgQEAKXy9ACl8vQApfL0AKICBACl8vQApfL0AKXy9ACiAgQEAKXy8vICAgICBACiAgXy8vICAgQAogIF8vLyAgIEAKICAgIF8vLy9ACiAgXy8vICAgQAogIF8vLyAgIEAKXy8vICAgICBACiAgICAgICAgQEAKXy8vICBfLyAgIEAKICAgXy8gIF8vL0AKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAK'
);

export default catwalk;
