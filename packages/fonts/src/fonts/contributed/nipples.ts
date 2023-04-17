import { FontFile } from '../../FontFile';

const nipples = new FontFile(
    'nipples',
    'ZmxmMmEkIDggNyAyMCAtMSAyCk5JUFBMRVMgYnkgUm9uIEZyaXR6IDgvOTQKRmlnbGV0IFJlbGVhc2UgMi4wCiRACiRACiRACiRACiRACiRACiRACiBAQAp7X19ACntfX0AKe19fQAp7XyBACntfIEAKICAgQAp7X19ACiAgIEBACntfIHtfQAp7XyB7X0AKICAgICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEBACiAgICAgICAgICAgICBACiAge19fICAge19fICBACntfX19fX18ge19fX19ACiAge19fICAge19fICBACiAge19fICAge19fICBACntfX19fX18ge19fX19ACiAge19fICAge19fICBACiAgICAgICAgICAgICBAQAogICB7X18gIEAKIHtfIHtfXyBACntfXyAgICAgQAogIHtfXyAgIEAKICAgICB7X19ACntfXyB7X18gQAogICB7X18gIEAKICAgICAgICBAQAogICAgICAgICBACntfXyAge19fIEAKICAgIHtfXyAgQAogICB7X18gICBACiAge19fICAgIEAKIHtfXyAgICAgQAp7X18gIHtfXyBACiAgICAgICAgIEBACiAgIHtfICAgQAoge19fIHtfX0AKe19fICAgICBACiB7X19fICAgQAp7X18gICAgIEAKIHtfXyB7X19ACiAgIHtfICAgQAogICAgICAgIEBACntfX0AKIHtfQAogICBACiAgIEAKICAgQAogICBACiAgIEAKICAgQEAKICB7X19ACiB7X18gQAp7X18gIEAKe19fICBACntfXyAgQAoge19fIEAKICB7X19ACiAgICAgQEAKe19fICBACiB7X18gQAogIHtfX0AKICB7X19ACiAge19fQAoge19fIEAKe19fICBACiAgICAgQEAKICAgICAge19fICAgICBACiB7X18gIHtfXyAge19fQAogICB7XyB7XyB7X18gIEAKe19fX18ge19fX19fX19ACiAgIHtfIHtfIHtfXyAgQAoge19fICB7X18gIHtfX0AKICAgICAge19fICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgICAgICBACiAgICAge19fICAgQAogICAgIHtfXyAgIEAKe19fXyB7X19fX19ACiAgICAge19fICAgQAogICAgIHtfXyAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEAKe19fQAoge19AQAogICAgICBACiAgICAgIEAKICAgICAgQAp7X19fX19ACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBACntfX0AKICAgQEAKICAgICAge19fQAogICAgIHtfXyBACiAgICB7X18gIEAKICAge19fICAgQAogIHtfXyAgICBACiB7X18gICAgIEAKe19fICAgICAgQAogICAgICAgICBAQAogICAgICAgICAgICBACiAgICB7X18gICAgIEAKICB7X18gIHtfXyAgQAp7X18gICAgIHtfXyBACntfXyAgICAgIHtfX0AKIHtfXyAgICB7X18gQAogICB7X19fICAgICBACiAgICAgICAgICAgIEBACiAgICAgQAp7X18gIEAKIHtfXyBACiB7X18gQAoge19fIEAKIHtfXyBACntfX19fQAogICAgIEBACiAgICAgICAgICBACiB7X18ge18gICBACntfICAgICB7X19ACiAgICAge19fICBACiAgIHtfXyAgICBACiB7X18gICAgICBACntfX19fX19fXyBACiAgICAgICAgICBAQAogICAgICAgICBACntfXyB7X18gIEAKICAge19fICAgQAoge19fICAgICBACiAgICB7X18gIEAKICAgICAge19fQAp7X19fX18gICBACiAgICAgICAgIEBACiAgICAgICAgICAgIEAKICAgICAge19fICAgQAogICAgeyB7X18gICBACiAgIHtfIHtfXyAgIEAKIHtfXyAge19fICAgQAp7X19fXyB7XyB7X19ACiAgICAgIHtfXyAgIEAKICAgICAgICAgICAgQEAKICAgICAgICAgQAp7X18ge19fXyBACntfXyAgICAgIEAKe19fXyAgICAgQAogICAge19fICBACiAgICAgIHtfX0AKe19fXyB7X18gQAogICAgICAgICBAQAogICAgICAgICAgIEAKICAgIHtfXyAgICBACiAgIHtfXyAgICAgQAogIHtfXyAgICAgIEAKe18gICAge19fICBACntfXyAgICAge19fQAogIHtfXyB7X18gIEAKICAgICAgICAgICBAQAogICAgICAgICAgQAp7X19fX18ge19fQAogICAgICB7X18gQAogICAgIHtfXyAgQAogICAge19fICAgQAogICAge19fICAgQAogICAge19fICAgQAogICAgICAgICAgQEAKICAgICAgICAgICBACiAgICB7XyAgICAgQAoge19fICB7X18gIEAKe19fICAgICB7XyBACiAge19fIHtfICAgQAp7X18gICAgIHtfX0AKICB7X19fXyAgICBACiAgICAgICAgICAgQEAKICAgICAgICAgICAgQAogICB7XyB7X18gICBACiB7X18gICAgIHtfX0AKe18gICAgICB7X18gQAogIHtfICB7X18gICBACiAgICAge19fICAgIEAKICAge19fICAgICAgQAogICAgICAgICAgICBAQAogICBACiAgIEAKICAgQAogICBACntfX0AKICAgQAp7X19ACiAgIEBACiAgIEAKICAgQAogICBACiAgIEAKe19fQAogICBACntfX0AKIHtfQEAKICAgICAge19fQAogICAge19fICBACiAge19fICAgIEAKe19fICAgICAgQAogIHtfXyAgICBACiAgICB7X18gIEAKICAgICAge19fQAogICAgICAgICBAQAogICAgICAgQAogICAgICAgQAp7X19fX19fQAogICAgICAgQAp7X19fX19fQAogICAgICAgQAogICAgICAgQAogICAgICAgQEAKe19fICAgICAgQAogIHtfXyAgICBACiAgICB7X18gIEAKICAgICAge19fQAogICAge19fICBACiAge19fICAgIEAKe19fICAgICAgQAogICAgICAgICBAQAp7X19fICAgIEAKICAgIHtfXyBACiAgICAge19fQAogICAge19fIEAKIHtfXyAgICBACiAgICAgICAgQAoge19fICAgIEAKICAgICAgICBAQAogICAgICAgICAgICAgQAogICAge19fXyAgICAgQAogIHtfICAgIHtfXyAgQAoge18gIHtfXyAge19fQAp7X18ge19feyAge19fQAoge19fICAgYGBgICAgQAogICAge19fICAgICAgQAogICAgICAgICAgICAgQEAKICAgICAge18gICAgICAgQAogICAgIHtfIF9fICAgICBACiAgICB7XyAge19fICAgIEAKICAge19fICAge19fICAgQAogIHtfX19fX18ge19fICBACiB7X18gICAgICAge19fIEAKe19fICAgICAgICAge19fQAogICAgICAgICAgICAgICBAQAp7X18ge19fICAgQAp7XyAgICB7X18gQAp7XyAgICAge19fQAp7X19fIHtfICAgQAp7XyAgICAge19fQAp7XyAgICAgIHtfQAp7X19fXyB7X18gQAogICAgICAgICAgQEAKICAgIHtfXyAgIEAKIHtfXyAgIHtfX0AKe19fICAgICAgIEAKe19fICAgICAgIEAKe19fICAgICAgIEAKIHtfXyAgIHtfX0AKICAge19fX18gIEAKICAgICAgICAgIEBACntfX19fXyAgICBACntfXyAgIHtfXyBACntfXyAgICB7X19ACntfXyAgICB7X19ACntfXyAgICB7X19ACntfXyAgIHtfXyBACntfX19fXyAgICBACiAgICAgICAgICBAQAp7X19fX19fX19ACntfXyAgICAgIEAKe19fICAgICAgQAp7X19fX19fICBACntfXyAgICAgIEAKe19fICAgICAgQAp7X19fX19fX19ACiAgICAgICAgIEBACntfX19fX19fX0AKe19fICAgICAgQAp7X18gICAgICBACntfX19fX18gIEAKe19fICAgICAgQAp7X18gICAgICBACntfXyAgICAgIEAKICAgICAgICAgQEAKICAge19fX18gICBACiB7XyAgICB7X18gQAp7X18gICAgICAgIEAKe19fICAgICAgICBACntfXyAgIHtfX19fQAoge19fICAgIHtfIEAKICB7X19fX18gICBACiAgICAgICAgICAgQEAKe19fICAgICB7X19ACntfXyAgICAge19fQAp7X18gICAgIHtfX0AKe19fX19fXyB7X19ACntfXyAgICAge19fQAp7X18gICAgIHtfX0AKe19fICAgICB7X19ACiAgICAgICAgICAgQEAKe19fQAp7X19ACntfX0AKe19fQAp7X19ACntfX0AKe19fQAogICBAQAogICAgIHtfX0AKICAgICB7X19ACiAgICAge19fQAogICAgIHtfX0AKICAgICB7X19ACntfICAge19fQAoge19fX18gIEAKICAgICAgICBAQAp7X18gICB7X18gIEAKe19fICB7X18gICBACntfXyB7X18gICAgQAp7XyB7XyAgICAgIEAKe19fICB7X18gICBACntfXyAgIHtfXyAgQAp7X18gICAgIHtfX0AKICAgICAgICAgICBAQAp7X18gICAgICBACntfXyAgICAgIEAKe19fICAgICAgQAp7X18gICAgICBACntfXyAgICAgIEAKe19fICAgICAgQAp7X19fX19fX19ACiAgICAgICAgIEBACntfXyAgICAgICB7X19ACntfIHtfXyAgIHtfX19ACntfXyB7X18geyB7X19ACntfXyAge19fICB7X19ACntfXyAgIHtfICB7X19ACntfXyAgICAgICB7X19ACntfXyAgICAgICB7X19ACiAgICAgICAgICAgICBAQAp7X19fICAgICB7X19ACntfIHtfXyAgIHtfX0AKe19fIHtfXyAge19fQAp7X18gIHtfXyB7X19ACntfXyAgIHtfIHtfX0AKe19fICAgIHtfIF9fQAp7X18gICAgICB7X19ACiAgICAgICAgICAgIEBACiAgICB7X19fXyAgICAgQAogIHtfXyAgICB7X18gIEAKe19fICAgICAgICB7X19ACntfXyAgICAgICAge19fQAp7X18gICAgICAgIHtfX0AKICB7X18gICAgIHtfXyBACiAgICB7X19fXyAgICAgQAogICAgICAgICAgICAgIEBACntfX19fX19fICBACntfXyAgICB7X19ACntfXyAgICB7X19ACntfX19fX19fICBACntfXyAgICAgICBACntfXyAgICAgICBACntfXyAgICAgICBACiAgICAgICAgICBAQAogICAge19fX18gICAgQAogIHtfXyAgICB7X18gQAp7X18gICAgICAge19fQAp7X18gICAgICAge19fQAp7X18gICAgICAge19fQAogIHtfXyB7XyB7X18gQAogICAge19fIF9fICAgQAogICAgICAgICB7XyAgQEAKe19fX19fX18gICAgQAp7X18gICAge19fICBACntfXyAgICB7X18gIEAKe18ge19fICAgICAgQAp7X18gIHtfXyAgICBACntfXyAgICB7X18gIEAKe19fICAgICAge19fQAogICAgICAgICAgICBAQAogIHtfXyBfXyAgQAp7X18gICAge19fQAoge19fICAgICAgQAogICB7X18gICAgQAogICAgICB7X18gQAp7X18gICAge19fQAogIHtfXyBfXyAgQAogICAgICAgICAgQEAKe19fXyB7X19fX19fQAogICAgIHtfXyAgICBACiAgICAge19fICAgIEAKICAgICB7X18gICAgQAogICAgIHtfXyAgICBACiAgICAge19fICAgIEAKICAgICB7X18gICAgQAogICAgICAgICAgICBAQAp7X18gICAgIHtfX0AKe19fICAgICB7X19ACntfXyAgICAge19fQAp7X18gICAgIHtfX0AKe19fICAgICB7X19ACntfXyAgICAge19fQAogIHtfX19fXyAgIEAKICAgICAgICAgICBAQAp7X18gICAgICAgICB7X19ACiB7X18gICAgICAge19fIEAKICB7X18gICAgIHtfXyAgQAogICB7X18gICB7X18gICBACiAgICB7X18ge19fICAgIEAKICAgICB7X19fXyAgICAgQAogICAgICB7X18gICAgICBACiAgICAgICAgICAgICAgIEBACntfXyAgICAgICAge19fQAp7X18gICAgICAgIHtfX0AKe19fICAge18gICB7X19ACntfXyAge19fICAge19fQAp7X18ge18ge19fIHtfX0AKe18ge18gICAge19fX19ACntfXyAgICAgICAge19fQAogICAgICAgICAgICAgIEBACntfXyAgICAgIHtfX0AKIHtfXyAgIHtfXyAgQAogIHtfXyB7X18gICBACiAgICB7X18gICAgIEAKICB7X18ge19fICAgQAoge19fICAge19fICBACntfXyAgICAgIHtfX0AKICAgICAgICAgICAgQEAKe19fICAgICAge19fQAoge19fICAgIHtfXyBACiAge19fIHtfXyAgIEAKICAgIHtfXyAgICAgQAogICAge19fICAgICBACiAgICB7X18gICAgIEAKICAgIHtfXyAgICAgQAogICAgICAgICAgICBAQAp7X19fX19fXyB7X19ACiAgICAgICB7X18gIEAKICAgICAge19fICAgQAogICAge19fICAgICBACiAgIHtfXyAgICAgIEAKIHtfXyAgICAgICAgQAp7X19fX19fX19fX19ACiAgICAgICAgICAgIEBACntfX19fQAp7X18gIEAKe19fICBACntfXyAgQAp7X18gIEAKe19fICBACntfX19fQAogICAgIEBACntfXyAgICAgIEAKIHtfXyAgICAgQAogIHtfXyAgICBACiAgIHtfXyAgIEAKICAgIHtfXyAgQAogICAgIHtfXyBACiAgICAgIHtfX0AKICAgICAgICAgQEAKe19fX19ACiAge19fQAogIHtfX0AKICB7X19ACiAge19fQAogIHtfX0AKe19fX19ACiAgICAgQEAKICAgIHtfXyAgICBACiAge19fIHtfXyAgQAp7X18gICAgIHtfX0AKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQAp7X19fX19AQAp7X19ACntfIEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEBACiAgICAgICAgICBACiAgICAgICAgICBACiAgIHtfXyAgICBACiB7X18gIHtfXyBACntfXyAgIHtfXyBACntfXyAgIHtfXyBACiAge19fIHtfX19ACiAgICAgICAgICBAQAp7X18gICAgICBACntfXyAgICAgIEAKe19fICAgICAgQAp7X18ge19fICBACntfXyAgIHtfX0AKe19fICAge19fQAp7X18ge19fICBACiAgICAgICAgIEBACiAgICAgICBACiAgICAgICBACiAgIHtfX19ACiB7X18gICBACntfXyAgICBACiB7X18gICBACiAgIHtfX19ACiAgICAgICBAQAogICAgIHtfX0AKICAgICB7X19ACiAgICAge19fQAoge19fIHtfX0AKe18gICB7X19ACntfICAge19fQAoge19fIHtfX0AKICAgICAgICBAQAogICAgICAgICAgQAogICAgICAgICAgQAogICB7X18gICAgQAoge18gICB7X18gQAp7X19fX18ge19fQAp7XyAgICAgICAgQAogIHtfX19fICAgQAogICAgICAgICAgQEAKICAgIHtfX0AKICB7XyAgIEAKe197XyB7X0AKICB7X18gIEAKICB7X18gIEAKICB7X18gIEAKICB7X18gIEAKICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAogICB7X18gICBACiB7X18gIHtfX0AKe19fICAge19fQAoge19fICB7X19ACiAgICAge19fIEAKICB7X18gICAgQEAKICAgICAgICBACntfXyAgICAgQAp7X18gICAgIEAKe18ge18gICBACntfXyAge19fQAp7XyAgIHtfX0AKe19fICB7X19ACiAgICAgICAgQEAKICAgQAoge19ACiAgIEAKe19fQAp7X19ACntfX0AKe19fQAogICBAQAogICAgICBACiAgIHtfX0AKICAgICAgQAogICB7X19ACiAgIHtfX0AKICAge19fQAogICB7X19ACntfX18gIEBACntfXyAgICAgQAp7X18gICAgIEAKe19fICB7X19ACntfXyB7X18gQAp7X3tfXyAgIEAKe19fIHtfXyBACntfXyAge19fQAogICAgICAgIEBACiB7X19ACiB7X19ACiB7X19ACiB7X19ACiB7X19ACiB7X19ACntfX19ACiAgICBAQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAp7X19fIHtfXyB7X18gQAoge19fICB7XyAge19fQAoge19fICB7XyAge19fQAoge19fICB7XyAge19fQAp7X19fICB7XyAge19fQAogICAgICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACntfXyB7X18gIEAKIHtfXyAge19fQAoge19fICB7X19ACiB7X18gIHtfX0AKe19fXyAge19fQAogICAgICAgICBAQAogICAgICAgICAgQAogICAgICAgICAgQAogICB7X18gICAgQAoge19fICB7X18gQAp7X18gICAge19fQAoge19fICB7X18gQAogICB7X18gICAgQAogICAgICAgICAgQEAKICAgICAgICBACiAgICAgICAgQAp7XyB7X18gIEAKe18gIHtfXyBACntfICAge19fQAp7X18ge19fIEAKe19fICAgICBACntfXyAgICAgQEAKICAgICAgICBACiAgICAgICAgQAogIHtfXyAgIEAKe18gIHtfXyBACntfICB7X18gQAoge19fe19fIEAKICAgIHtfXyBACiAgICB7X19fQEAKICAgICAgIEAKICAgICAgIEAKe18ge19fX0AKIHtfXyAgIEAKIHtfXyAgIEAKIHtfXyAgIEAKe19fXyAgIEAKICAgICAgIEBACiAgICAgICBACiAgICAgICBACiB7X19fXyBACntfXyAgICBACiAge19fXyBACiAgICB7X19ACntfXyB7X19ACiAgICAgICBAQAogIHtfXyAgQAogIHtfXyAgQAp7X3tfIHtfQAogIHtfXyAgQAogIHtfXyAgQAogIHtfXyAgQAogICB7X18gQAogICAgICAgQEAKICAgICAgICBACiAgICAgICAgQAp7X18gIHtfX0AKe19fICB7X19ACntfXyAge19fQAp7X18gIHtfX0AKICB7X197X19ACiAgICAgICAgQEAKICAgICAgICAgICBACiAgICAgICAgICAgQAp7X18gICAgIHtfX0AKIHtfXyAgIHtfXyBACiAge19fIHtfXyAgQAogICB7X3tfXyAgIEAKICAgIHtfXyAgICBACiAgICAgICAgICAgQEAKICAgICAgICAgICAgQAogICAgICAgICAgICBACntfXyAgICAge19fX0AKIHtfXyAgXyAge19fQAoge19fIHtfICB7X19ACiB7XyB7XyB7X3tfX0AKe19fXyAgICB7X19fQAogICAgICAgICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKe19fICAge19fQAogIHtfIHtfXyBACiAgIHtfICAgIEAKIHtfICB7X18gQAp7X18gICB7X19ACiAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAp7X18gICB7X19ACiB7X18ge19fIEAKICAge19fXyAgQAogICAge19fICBACiAgIHtfXyAgIEAKIHtfXyAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACntfX19fIHtfX0AKICAgICB7X18gQAogICB7X18gICBACiAge19fICAgIEAKe19fX19fX19fQAogICAgICAgICBAQAogICAge19fQAogIHtfXyAgQAogIHtfXyAgQAp7X18gICAgQAogIHtfXyAgQAogIHtfXyAgQAogICAge19fQAogICAgICAgQEAKe19ACntfQAp7X0AKICBACntfQAp7X0AKe19ACiAgQEAKX199ICAgIEAKICBfX30gIEAKICBfX30gIEAKICAgIF9ffUAKICBfX30gIEAKICBfX30gIEAKX199ICAgIEAKICAgICAgIEBACntfXyAge18gICBACiAgIHtfICB7X19ACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACg=='
);

export default nipples;
