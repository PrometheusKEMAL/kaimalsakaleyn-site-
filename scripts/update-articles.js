const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../lib/mock-data/index.ts');
let content = fs.readFileSync(indexPath, 'utf-8');

// Replace Article 1: Hakikatin İki Kanadı
const replace1 = 'slug: "hakikatin-iki-kanadi-kuran-ve-itret",\n' +
    '    title: "Hakikatin İki Kanadı: Kur\'an ve İtret",\n' +
    '    subtitle: "Sekaleyn Hadisi Ekseninde Bir İnceleme",\n' +
    '    summary: "Peygamber Efendimiz\'in (s.a.v.) Veda Haccı\'nda bıraktığı iki emanetin, Kur\'an ve Ehl-i Beyt\'in ayrılmazlığının günümüzdeki anlamı üzerine tefekkür.",\n' +
    '    content: `\n' +
    '# Hakikatin İki Kanadı: Kur\'an ve İtret\n\n' +
    'Peygamber Efendimiz (s.a.v.) ömrünün son demlerinde, Veda Haccı\'nda ümmetine kıyamete kadar yol gösterecek iki büyük emanet bırakmıştır. Bu emanetlerin mahiyeti ve birbirleriyle olan ayrılmaz bağı, İslam düşünce tarihinin en temel konularından biridir. Bu makalede, Sekaleyn Hadisi merkeze alınarak Kur\'an ve Ehl-i Beyt\'in neden birbirinden ayrılamayacağı teolojik ve ontolojik boyutlarıyla incelenmektedir.\n\n' +
    '## Sekaleyn Hadisinin Kaynakları ve Mütevatir Oluşu\n\n' +
    'Hadis-i Sekaleyn, hem Şiî hem de Sünni kaynaklarda mütevatir derecesine ulaşmış, inkarı mümkün olmayan bir hakikattir. Resulullah (s.a.v) şöyle buyurmuştur: \n' +
    '> "Ben size iki paha biçilmez emanet bırakıyorum: Allah\'ın Kitabı ve Ehl-i Beytim (İtretim). Bunlara sarıldığınız sürece asla sapıtmazsınız." (Müslim, Fedailu\'s-Sahabe, 36)\n\n' +
    'Bu hadis, İslam ümmetinin yegane kurtuluş reçetesidir. İki emanetin "paha biçilmez" (Sekaleyn) olarak nitelendirilmesi, onların sıradan birer miras olmadığını, aksine hidayetin yegane kaynağı olduklarını gösterir.\n\n' +
    '## Kur\'an ve Ehl-i Beyt\'in Ayrılmaz Birlikteliği\n\n' +
    'Bu iki emanet sadece yan yana duran iki rehber değil, birbirini tamamlayan, biri olmadan diğerinin tam anlaşılamayacağı organik bir bütündür:\n' +
    '* **Kur\'an:** İlahi vahyin yazılı metni, dilsiz (samit) bir rehberdir.\n' +
    '* **Ehl-i Beyt:** O metnin yaşayan, nefes alan, en doğru ve sapmasız tefsiri, konuşan (natık) Kur\'an\'dır.\n\n' +
    'Nitekim hadisin devamında *"Bu ikisi Havz-ı Kevser\'de bana varıncaya kadar birbirinden ayrılmazlar"* buyrularak bu ontolojik ayrılmazlık vurgulanmıştır. Kur\'an\'ı Ehl-i Beyt\'siz anlamaya çalışmak, metni kendi heva ve hevesine göre yorumlama tehlikesini doğururken; Ehl-i Beyt\'i Kur\'an\'dan bağımsız düşünmek de imkansızdır.\n\n' +
    '### Günümüzdeki Yansımaları\n' +
    'Günümüzde Müslümanların yaşadığı en büyük kriz, bu iki kanattan birini ihmal etmekten veya ikisini birbirinden ayırmaktan kaynaklanmaktadır. Yalnızca Kur\'an diyenler vahyin pratik ve masum tefsirinden mahrum kalırken, sadece İtret diyenler vahyin evrensel metninden uzaklaşma riski taşır. Hakikat kuşu ancak bu iki kanatla uçabilir.\n' +
    '`,';
content = content.replace(/slug:\s*"hakikatin-iki-kanadi-kuran-ve-itret"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?content:\s*`[\s\S]*?`,/, replace1);

// Replace Article 3: Kerbela
const replace3 = 'slug: "kerbela-bir-direnis-okulu",\n' +
    '    title: "Kerbela: Bir Direniş Okulu",\n' +
    '    subtitle: "Aşura\'nın Sosyolojik ve İrfani Boyutu",\n' +
    '    summary: "İmam Hüseyin\'in (a.s.) kıyamının sadece tarihi bir trajedi değil, her çağda yaşayan bir hak ve adalet mektebi olması.",\n' +
    '    content: `\n' +
    '# Kerbela: Bir Direniş Okulu\n\n' +
    'Hicri 61. yılda yaşanan Kerbela Vakıası, İslam tarihinin en acı verici sayfası olmakla birlikte, aynı zamanda en büyük direniş ve uyanış destanıdır. İmam Hüseyin\'in (a.s.) Yezid\'in gayr-i meşru yönetimine karşı başlattığı bu kıyam, sadece o döneme ait siyasi bir çatışma değil, hak ile batılın kıyamete kadar sürecek mücadelesinin sembolüdür.\n\n' +
    '## Aşura\'nın Sosyolojik Mesajı\n\n' +
    'İmam Hüseyin (a.s.) kıyamının temel felsefesini şu sözlerle özetlemiştir: \n' +
    '> "Ben makam, rütbe, fesat çıkarmak veya zulmetmek için yola çıkmadım. Ben ancak ceddimin ümmetini ıslah etmek, iyiliği emredip kötülükten sakındırmak için yola çıktım."\n\n' +
    'Bu söz, Kerbela\'nın salt bir iktidar mücadelesi olmadığını, aksine ümmetin üzerine çöken ahlaki ve siyasi çürümüşlüğe karşı sosyolojik bir müdahale olduğunu gösterir. Aşura, pasif kalabalıkların nasıl uyandırılacağının ve adaletsizliğe karşı sessiz kalmanın nasıl bir zillet olduğunun manifestosudur.\n\n' +
    '## İrfani Boyut: Aşka Adanmışlık\n\n' +
    'Kerbela, görünürde kılıçların ve mızrakların konuştuğu bir savaş meydanı olsa da, batınında ilahi aşkın ve teslimiyetin zirvesidir. İmam Hüseyin (a.s.) ve ashabı, Allah rızası için canlarını, mallarını ve evlatlarını feda ederek irfani bir yolculuğun en yüksek makamına (fena fillah) ulaşmışlardır. Aşura günü okunan dualar, Zeyneb-i Kübra\'nın (s.a.) esaret altındaki dik duruşu ve "Ben güzellikten başka bir şey görmedim" sözü, bu kıyamın irfani derinliğini yansıtır.\n\n' +
    '## Günümüzde Kerbela\n' +
    '"Her gün Aşura, her yer Kerbela" düsturu, bu mektebin evrenselliğini ilan eder. Günümüzde Kerbela; zulme, emperyalizme ve haksızlığa karşı direnen her onurlu insanın ilham kaynağıdır. Aşura\'yı anmak, sadece geçmişe ağlamak değil, bugünün Yezidlerine karşı bugünün Hüseyni duruşunu sergileyebilmektir.\n' +
    '`,';
content = content.replace(/slug:\s*"kerbela-bir-direnis-okulu"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?(?:content:\s*`[\s\S]*?`,)?/, replace3);

// Replace Article 4: Modern Dünyada İmamet
const replace4 = 'slug: "modern-dunyada-imamet",\n' +
    '    title: "Modern Dünyada İmamet",\n' +
    '    subtitle: "Rehbersiz Kalan İnsanın Savrulmaları",\n' +
    '    summary: "Modernizm ve sekülerleşmenin yol açtığı anlam krizine karşı, İmamet inancının bireysel ve toplumsal hayatımıza sunduğu ufuk.",\n' +
    '    content: `\n' +
    '# Modern Dünyada İmamet ve İnsanın Arayışı\n\n' +
    'Aydınlanma sonrası dönemde, aklı yegane rehber kabul eden modern insan, maddi alanda devasa ilerlemeler kaydetmiş olsa da, manevi ve varoluşsal anlamda büyük bir buhrana sürüklenmiştir. Değerlerin göreceleştiği, hakikatin parçalandığı ve sekülerizmin insanı ilahi olandan kopardığı bu çağda, "İmamet" inancı sadece teolojik bir tartışma değil, varoluşsal bir ihtiyaç olarak karşımıza çıkmaktadır.\n\n' +
    '## Rehbersizlik ve Anlam Krizi\n\n' +
    'Modernizm, insanı kendi kendine yeten, ilahi bir rehberliğe ihtiyaç duymayan bir varlık olarak tanımlamıştır. Ancak yüzyıllar süren bu tecrübe; savaşlar, ekolojik yıkımlar ve artan ruhsal çöküntülerle insanın kâmil bir rehber (İnsan-ı Kamil) olmadan yeryüzünde adaleti ve barışı tesis edemeyeceğini göstermiştir. \n\n' +
    '> Yeryüzü hiçbir zaman ilahi bir hüccetten (imam) yoksun kalamaz. (Hadis)\n\n' +
    'Bu ilke, Allah\'ın insanlığı kendi başına, rehbersiz ve karanlıkta bırakmayacağının en büyük garantisidir.\n\n' +
    '## İmamet: Kozmik ve Toplumsal Düzen\n\n' +
    'Şiî düşüncesinde İmamet, sadece siyasi bir liderlik (hilafet) meselesi değildir. İmam, yaratılış gayesinin gerçekleşmesi, ilahi feyzin yeryüzüne ulaşması ve Kur\'an\'ın batıni hakikatlerinin korunması için ontolojik bir zorunluluktur. İmam, Allah ile kullar arasındaki manevi köprüdür. \n\n' +
    'Modern dünyada İmamet inancına sahip olmak:\n' +
    '1. **Umut ve Direniş:** Beklenen İmam (a.f.) inancı, ne kadar karanlık görünürse görünsün geleceğin hak ve adaletten yana olacağına dair sarsılmaz bir umut verir.\n' +
    '2. **Ahlaki Kılavuz:** İmamların masumiyeti ve kusursuz ahlakı, göreceli ahlak teorilerine karşı mutlak ve sarsılmaz bir ahlaki model sunar.\n' +
    '3. **Anlam Arayışı:** Hakikatin parçalandığı bir dünyada, İmamet insanı tevhide, birliğe ve varoluşun asıl gayesine yönlendirir.\n\n' +
    'İmamet, modern insanın kaybolduğu labirentten çıkış için gökyüzünden uzatılan kopmaz bir iptir (Hablullah).\n' +
    '`,';
content = content.replace(/slug:\s*"modern-dunyada-imamet"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?(?:content:\s*`[\s\S]*?`,)?/, replace4);

fs.writeFileSync(indexPath, content);
console.log("Mock data updated successfully.");
