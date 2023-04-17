import { FontFile } from '../../FontFile';

const coinstak = new FontFile(
    'coinstak',
    'ZmxmMmEkIDggNyAyMCAtMSAyCkNPSU5TVEFLIGJ5IFJvbiBGcml0eiA4Lzk0CkZpZ2xldCBSZWxlYXNlIDIvMAokQAokQAokQAokQAokQAokQAokQAogQEAKTykpQApPKSlACk8pKUAKTykgQApPKSBACiAgIEAKTykpQAogICBAQApPKSBPKUAKTykgTylACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKICAgICBAQAogICAgICAgICAgICAgQAogIE8pKSAgIE8pKSAgQApPKSkpKSkpIE8pKSkpQAogIE8pKSAgIE8pKSAgQAogIE8pKSAgIE8pKSAgQApPKSkpKSkpIE8pKSkpQAogIE8pKSAgIE8pKSAgQAogICAgICAgICAgICAgQEAKICBPKSkgIEAKIE8pIE8pKUAKTykpICAgIEAKIE8pKSAgIEAKICAgTykpIEAKTykpIE8pKUAKICBPKSkgIEAKICAgICAgIEBACiAgICAgICAgIEAKTykpICBPKSkgQAogICAgTykpICBACiAgIE8pKSAgIEAKICBPKSkgICAgQAogTykpICAgICBACk8pKSAgTykpIEAKICAgICAgICAgQEAKICAgTykgICBACiBPKSkgTykpQApPKSkgICAgIEAKIE8pKSkgICBACk8pKSAgICAgQAogTykpIE8pKUAKICAgTykgICBACiAgICAgICAgQEAKTykpQAogTylACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBAQAogIE8pKUAKIE8pKSBACk8pKSAgQApPKSkgIEAKTykpICBACiBPKSkgQAogIE8pKUAKICAgICBAQApPKSkgIEAKIE8pKSBACiAgTykpQAogIE8pKUAKICBPKSlACiBPKSkgQApPKSkgIEAKICAgICBAQAogICAgICBPKSkgICAgIEAKIE8pKSAgTykpICBPKSlACiAgIE8pIE8pIE8pKSAgQApPKSkpKSBPKSkpKSkpKUAKICAgTykgTykgTykpICBACiBPKSkgIE8pKSAgTykpQAogICAgICBPKSkgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICAgICAgIEAKICAgICBPKSkgICBACiAgICAgTykpICAgQApPKSkpIE8pKSkpKUAKICAgICBPKSkgICBACiAgICAgTykpICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICBACiAgIEAKICAgQAogICBACiAgIEAKICAgQApPKSlACiBPKUBACiAgICAgIEAKICAgICAgQAogICAgICBACk8pKSkpKUAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEAKTykpQAogICBAQAogICAgICBPKSlACiAgICAgTykpIEAKICAgIE8pKSAgQAogICBPKSkgICBACiAgTykpICAgIEAKIE8pKSAgICAgQApPKSkgICAgICBACiAgICAgICAgIEBACiAgICAgICAgICAgIEAKICAgIE8pKSAgICAgQAogIE8pKSAgTykpICBACk8pKSAgICAgTykpIEAKTykpICAgICAgTykpQAogTykpICAgIE8pKSBACiAgIE8pKSkgICAgIEAKICAgICAgICAgICAgQEAKICAgICBACk8pKSAgQAogTykpIEAKIE8pKSBACiBPKSkgQAogTykpIEAKTykpKSlACiAgICAgQEAKICAgICAgICAgQAogTykgTykpICBACk8pICAgIE8pKUAKICAgICBPKSkgQAogICBPKSkgICBACiBPKSkgICAgIEAKTykpKSkpKSkpQAogICAgICAgICBAQAogICAgICAgICBACk8pKSBPKSkgIEAKICAgTykpICAgQAogTykpICAgICBACiAgICBPKSkgIEAKICAgICAgTykpQApPKSkpKSkgICBACiAgICAgICAgIEBACiAgICAgICAgICAgIEAKICAgICAgTykpICAgQAogICAgTyBPKSkgICBACiAgIE8pIE8pKSAgIEAKIE8pKSAgTykpICAgQApPKSkpKSBPKSBPKSlACiAgICAgIE8pKSAgIEAKICAgICAgICAgICAgQEAKICAgICAgICAgQApPKSkgTykpKSBACk8pKSAgICAgIEAKTykpKSAgICAgQAogICAgTykpICBACiAgICAgIE8pKUAKTykpKSBPKSkgQAogICAgICAgICBAQAogICAgICAgICAgIEAKICAgIE8pKSAgICBACiAgIE8pKSAgICAgQAogIE8pKSAgICAgIEAKTykgICAgTykpICBACk8pKSAgICAgTykpQAogIE8pKSBPKSkgIEAKICAgICAgICAgICBAQAogICAgICAgICAgQApPKSkpKSkgTykpQAogICAgICBPKSkgQAogICAgIE8pKSAgQAogICAgTykpICAgQAogICAgTykpICAgQAogICAgTykpICAgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKICAgIE8pICAgIEAKIE8pKSAgTykpIEAKTykpICAgICBPKUAKICBPKSkgTykgIEAKTykpICAgICBPKUAKICBPKSkpKSAgIEAKICAgICAgICAgIEBACiAgICAgICAgICAgQAogICBPKSBPKSkgIEAKIE8pKSAgICBPKSlACk8pICAgICAgTykpQAogIE8pKSBPKSkgIEAKICAgICBPKSkgICBACiAgIE8pKSAgICAgQAogICAgICAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKTykpQAogICBACk8pKUAKICAgQEAKICAgQAogICBACiAgIEAKICAgQApPKSlACiAgIEAKTykpQAogTylAQAogICAgICBPKSlACiAgICBPKSkgIEAKICBPKSkgICAgQApPKSkgICAgICBACiAgTykpICAgIEAKICAgIE8pKSAgQAogICAgICBPKSlACiAgICAgICAgIEBACiAgICAgICBACiAgICAgICBACk8pKSkpKSlACiAgICAgICBACk8pKSkpKSlACiAgICAgICBACiAgICAgICBACiAgICAgICBAQApPKSkgICAgICBACiAgTykpICAgIEAKICAgIE8pKSAgQAogICAgICBPKSlACiAgICBPKSkgIEAKICBPKSkgICAgQApPKSkgICAgICBACiAgICAgICAgIEBACk8pKSkgICAgQAogICAgTykpIEAKICAgICBPKSlACiAgICBPKSkgQAogTykpICAgIEAKICAgICAgICBACiBPKSkgICAgQAogICAgICAgIEBACiAgICAgICAgICAgICBACiAgICBPKSkpICAgICBACiAgTykgICAgTykpICBACiBPKSAgTykpICBPKSlACk8pKSBPKSlPICBPKSlACiBPKSkgICBgYGAgICBACiAgICBPKSkgICAgICBACiAgICAgICAgICAgICBAQAogICAgICBPKSAgICAgICBACiAgICAgTykgKSkgICAgIEAKICAgIE8pICBPKSkgICAgQAogICBPKSkgICBPKSkgICBACiAgTykpKSkpKSBPKSkgIEAKIE8pKSAgICAgICBPKSkgQApPKSkgICAgICAgICBPKSlACiAgICAgICAgICAgICAgIEBACk8pKSBPKSkgICBACk8pICAgIE8pKSBACk8pICAgICBPKSlACk8pKSkgTykgICBACk8pICAgICBPKSlACk8pICAgICAgTylACk8pKSkpIE8pKSBACiAgICAgICAgICBAQAogICAgTykpICAgQAogTykpICAgTykpQApPKSkgICAgICAgQApPKSkgICAgICAgQApPKSkgICAgICAgQAogTykpICAgTykpQAogICBPKSkpKSAgQAogICAgICAgICAgQEAKTykpKSkpICAgIEAKTykpICAgTykpIEAKTykpICAgIE8pKUAKTykpICAgIE8pKUAKTykpICAgIE8pKUAKTykpICAgTykpIEAKTykpKSkpICAgIEAKICAgICAgICAgIEBACk8pKSkpKSkpKUAKTykpICAgICAgQApPKSkgICAgICBACk8pKSkpKSkgIEAKTykpICAgICAgQApPKSkgICAgICBACk8pKSkpKSkpKUAKICAgICAgICAgQEAKTykpKSkpKSkpQApPKSkgICAgICBACk8pKSAgICAgIEAKTykpKSkpKSAgQApPKSkgICAgICBACk8pKSAgICAgIEAKTykpICAgICAgQAogICAgICAgICBAQAogICBPKSkpKSAgIEAKIE8pICAgIE8pKSBACk8pKSAgICAgICAgQApPKSkgICAgICAgIEAKTykpICAgTykpKSlACiBPKSkgICAgTykgQAogIE8pKSkpKSAgIEAKICAgICAgICAgICBAQApPKSkgICAgIE8pKUAKTykpICAgICBPKSlACk8pKSAgICAgTykpQApPKSkpKSkpIE8pKUAKTykpICAgICBPKSlACk8pKSAgICAgTykpQApPKSkgICAgIE8pKUAKICAgICAgICAgICBAQApPKSlACk8pKUAKTykpQApPKSlACk8pKUAKTykpQApPKSlACiAgIEBACiAgICAgTykpQAogICAgIE8pKUAKICAgICBPKSlACiAgICAgTykpQAogICAgIE8pKUAKTykgICBPKSlACiBPKSkpKSAgQAogICAgICAgIEBACk8pKSAgIE8pKSAgQApPKSkgIE8pKSAgIEAKTykpIE8pKSAgICBACk8pIE8pICAgICAgQApPKSkgIE8pKSAgIEAKTykpICAgTykpICBACk8pKSAgICAgTykpQAogICAgICAgICAgIEBACk8pKSAgICAgIEAKTykpICAgICAgQApPKSkgICAgICBACk8pKSAgICAgIEAKTykpICAgICAgQApPKSkgICAgICBACk8pKSkpKSkpKUAKICAgICAgICAgQEAKTykpICAgICAgIE8pKUAKTykgTykpICAgTykpKUAKTykpIE8pKSBPIE8pKUAKTykpICBPKSkgIE8pKUAKTykpICAgTykgIE8pKUAKTykpICAgICAgIE8pKUAKTykpICAgICAgIE8pKUAKICAgICAgICAgICAgIEBACk8pKSkgICAgIE8pKUAKTykgTykpICAgTykpQApPKSkgTykpICBPKSlACk8pKSAgTykpIE8pKUAKTykpICAgTykgTykpQApPKSkgICAgTykgKSlACk8pKSAgICAgIE8pKUAKICAgICAgICAgICAgQEAKICAgIE8pKSkpICAgICBACiAgTykpICAgIE8pKSAgQApPKSkgICAgICAgIE8pKUAKTykpICAgICAgICBPKSlACk8pKSAgICAgICAgTykpQAogIE8pKSAgICAgTykpIEAKICAgIE8pKSkpICAgICBACiAgICAgICAgICAgICAgQEAKTykpKSkpKSkgIEAKTykpICAgIE8pKUAKTykpICAgIE8pKUAKTykpKSkpKSkgIEAKTykpICAgICAgIEAKTykpICAgICAgIEAKTykpICAgICAgIEAKICAgICAgICAgIEBACiAgICBPKSkpKSAgICBACiAgTykpICAgIE8pKSBACk8pKSAgICAgICBPKSlACk8pKSAgICAgICBPKSlACk8pKSAgICAgICBPKSlACiAgTykpIE8pIE8pKSBACiAgICBPKSkgKSkgICBACiAgICAgICAgIE8pICBAQApPKSkpKSkpKSAgICBACk8pKSAgICBPKSkgIEAKTykpICAgIE8pKSAgQApPKSBPKSkgICAgICBACk8pKSAgTykpICAgIEAKTykpICAgIE8pKSAgQApPKSkgICAgICBPKSlACiAgICAgICAgICAgIEBACiAgTykpIE8pICBACk8pKSAgICBPKSlACiBPKSkgICAgICBACiAgIE8pKSAgICBACiAgICAgIE8pKSBACk8pKSAgICBPKSlACiAgTykpIE8pICBACiAgICAgICAgICBAQApPKSkpIE8pKSkpKSlACiAgICAgTykpICAgIEAKICAgICBPKSkgICAgQAogICAgIE8pKSAgICBACiAgICAgTykpICAgIEAKICAgICBPKSkgICAgQAogICAgIE8pKSAgICBACiAgICAgICAgICAgIEBACk8pKSAgICAgTykpQApPKSkgICAgIE8pKUAKTykpICAgICBPKSlACk8pKSAgICAgTykpQApPKSkgICAgIE8pKUAKTykpICAgICBPKSlACiAgTykpKSkpICAgQAogICAgICAgICAgIEBACk8pKSAgICAgICAgIE8pKUAKIE8pKSAgICAgICBPKSkgQAogIE8pKSAgICAgTykpICBACiAgIE8pKSAgIE8pKSAgIEAKICAgIE8pKSBPKSkgICAgQAogICAgIE8pKSkpICAgICBACiAgICAgIE8pKSAgICAgIEAKICAgICAgICAgICAgICAgQEAKTykpICAgICAgICBPKSlACk8pKSAgICAgICAgTykpQApPKSkgICBPKSAgIE8pKUAKTykpICBPKSkgICBPKSlACk8pKSBPKSBPKSkgTykpQApPKSBPKSAgICBPKSkpKUAKTykpICAgICAgICBPKSlACiAgICAgICAgICAgICAgQEAKTykpICAgICAgTykpQAogTykpICAgTykpICBACiAgTykpIE8pKSAgIEAKICAgIE8pKSAgICAgQAogIE8pKSBPKSkgICBACiBPKSkgICBPKSkgIEAKTykpICAgICAgTykpQAogICAgICAgICAgICBAQApPKSkgICAgICBPKSlACiBPKSkgICAgTykpIEAKICBPKSkgTykpICAgQAogICAgTykpICAgICBACiAgICBPKSkgICAgIEAKICAgIE8pKSAgICAgQAogICAgTykpICAgICBACiAgICAgICAgICAgIEBACk8pKSkpKSkpIE8pKUAKICAgICAgIE8pKSAgQAogICAgICBPKSkgICBACiAgICBPKSkgICAgIEAKICAgTykpICAgICAgQAogTykpICAgICAgICBACk8pKSkpKSkpKSkpKUAKICAgICAgICAgICAgQEAKTykpKSlACk8pKSAgQApPKSkgIEAKTykpICBACk8pKSAgQApPKSkgIEAKTykpKSlACiAgICAgQEAKTykpICAgICAgQAogTykpICAgICBACiAgTykpICAgIEAKICAgTykpICAgQAogICAgTykpICBACiAgICAgTykpIEAKICAgICAgTykpQAogICAgICAgICBAQApPKSkpKUAKICBPKSlACiAgTykpQAogIE8pKUAKICBPKSlACiAgTykpQApPKSkpKUAKICAgICBAQAogICAgTykpICAgIEAKICBPKSkgTykpICBACk8pKSAgICAgTykpQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBACk8pKSkpKUBACk8pKUAKTykgQAogICBACiAgIEAKICAgQAogICBACiAgIEAKICAgQEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgTykpICAgIEAKIE8pKSAgTykpIEAKTykpICAgTykpIEAKTykpICAgTykpIEAKICBPKSkgTykpKUAKICAgICAgICAgIEBACk8pKSAgICAgIEAKTykpICAgICAgQApPKSkgICAgICBACk8pKSBPKSkgIEAKTykpICAgTykpQApPKSkgICBPKSlACk8pKSBPKSkgIEAKICAgICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKICAgTykpKUAKIE8pKSAgIEAKTykpICAgIEAKIE8pKSAgIEAKICAgTykpKUAKICAgICAgIEBACiAgICAgTykpQAogICAgIE8pKUAKICAgICBPKSlACiBPKSkgTykpQApPKSAgIE8pKUAKTykgICBPKSlACiBPKSkgTykpQAogICAgICAgIEBACiAgICAgICAgICBACiAgICAgICAgICBACiAgIE8pKSAgICBACiBPKSAgIE8pKSBACk8pKSkpKSBPKSlACk8pICAgICAgICBACiAgTykpKSkgICBACiAgICAgICAgICBAQAogICAgTykpQAogIE8pICAgQApPKU8pIE8pQAogIE8pKSAgQAogIE8pKSAgQAogIE8pKSAgQAogIE8pKSAgQAogICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACiAgIE8pKSAgIEAKIE8pKSAgTykpQApPKSkgICBPKSlACiBPKSkgIE8pKUAKICAgICBPKSkgQAogIE8pKSAgICBAQAogICAgICAgIEAKTykpICAgICBACk8pKSAgICAgQApPKSBPKSAgIEAKTykpICBPKSlACk8pICAgTykpQApPKSkgIE8pKUAKICAgICAgICBAQAogICBACiBPKUAKICAgQApPKSlACk8pKUAKTykpQApPKSlACiAgIEBACiAgICAgIEAKICAgTykpQAogICAgICBACiAgIE8pKUAKICAgTykpQAogICBPKSlACiAgIE8pKUAKTykpKSAgQEAKTykpICAgICBACk8pKSAgICAgQApPKSkgIE8pKUAKTykpIE8pKSBACk8pTykpICAgQApPKSkgTykpIEAKTykpICBPKSlACiAgICAgICAgQEAKIE8pKUAKIE8pKUAKIE8pKUAKIE8pKUAKIE8pKUAKIE8pKUAKTykpKUAKICAgIEBACiAgICAgICAgICAgICBACiAgICAgICAgICAgICBACk8pKSkgTykpIE8pKSBACiBPKSkgIE8pICBPKSlACiBPKSkgIE8pICBPKSlACiBPKSkgIE8pICBPKSlACk8pKSkgIE8pICBPKSlACiAgICAgICAgICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKTykpIE8pKSAgQAogTykpICBPKSlACiBPKSkgIE8pKUAKIE8pKSAgTykpQApPKSkpICBPKSlACiAgICAgICAgIEBACiAgICAgICAgICBACiAgICAgICAgICBACiAgIE8pKSAgICBACiBPKSkgIE8pKSBACk8pKSAgICBPKSlACiBPKSkgIE8pKSBACiAgIE8pKSAgICBACiAgICAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACk8pIE8pKSAgQApPKSAgTykpIEAKTykgICBPKSlACk8pKSBPKSkgQApPKSkgICAgIEAKTykpICAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgTykpICAgQApPKSAgTykpIEAKTykgIE8pKSBACiBPKSlPKSkgQAogICAgTykpIEAKICAgIE8pKSlAQAogICAgICAgQAogICAgICAgQApPKSBPKSkpQAogTykpICAgQAogTykpICAgQAogTykpICAgQApPKSkpICAgQAogICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKIE8pKSkpIEAKTykpICAgIEAKICBPKSkpIEAKICAgIE8pKUAKTykpIE8pKUAKICAgICAgIEBACiAgTykpICBACiAgTykpICBACk8pTykgTylACiAgTykpICBACiAgTykpICBACiAgTykpICBACiAgIE8pKSBACiAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACk8pKSAgTykpQApPKSkgIE8pKUAKTykpICBPKSlACk8pKSAgTykpQAogIE8pKU8pKUAKICAgICAgICBAQAogICAgICAgICAgIEAKICAgICAgICAgICBACk8pKSAgICAgTykpQAogTykpICAgTykpIEAKICBPKSkgTykpICBACiAgIE8pTykpICAgQAogICAgTykpICAgIEAKICAgICAgICAgICBAQAogICAgICAgICAgICBACiAgICAgICAgICAgIEAKTykpICAgICBPKSkpQAogTykpICApICBPKSlACiBPKSkgTykgIE8pKUAKIE8pIE8pIE8pTykpQApPKSkpICAgIE8pKSlACiAgICAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQApPKSkgICBPKSlACiAgTykgTykpIEAKICAgTykgICAgQAogTykgIE8pKSBACk8pKSAgIE8pKUAKICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACk8pKSAgIE8pKUAKIE8pKSBPKSkgQAogICBPKSkpICBACiAgICBPKSkgIEAKICAgTykpICAgQAogTykpICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKTykpKSkgTykpQAogICAgIE8pKSBACiAgIE8pKSAgIEAKICBPKSkgICAgQApPKSkpKSkpKSlACiAgICAgICAgIEBACiAgICBPKSlACiAgTykpICBACiAgTykpICBACk8pKSAgICBACiAgTykpICBACiAgTykpICBACiAgICBPKSlACiAgICAgICBAQApPKUAKTylACk8pQAogIEAKTylACk8pQApPKUAKICBAQApPKSkgICAgQAogIE8pKSAgQAogIE8pKSAgQAogICAgTykpQAogIE8pKSAgQAogIE8pKSAgQApPKSkgICAgQAogICAgICAgQEAKTykpICBPKSAgIEAKICAgTykgIE8pKUAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAK'
);

export default coinstak;
