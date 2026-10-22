import {centre} from '../config/centreConfig';
// Sample entries. To show one publicly set BOTH isVerified and isAvailable to true,
// then fill docs: ['...'] and fee: '...' only if confirmed.
const S=(order,cat,icon,hi,en,dhi,den)=>({id:`s${order}`,order,cat,icon,hi,en,dhi,den,docs:[],fee:null,isVerified:false,isAvailable:false});
export const categories=['cert','scheme','id','digital'];
export const services=[
 S(1,'cert','FileBadge','जाति प्रमाण पत्र','Caste Certificate','जाति प्रमाण पत्र के आवेदन में सहायता।','Assistance with caste certificate applications.'),
 S(2,'cert','FileText','आय प्रमाण पत्र','Income Certificate','आय प्रमाण पत्र के आवेदन में सहायता।','Assistance with income certificate applications.'),
 S(3,'cert','Home','निवास प्रमाण पत्र','Residence Certificate','निवास प्रमाण पत्र के आवेदन में सहायता।','Assistance with residence certificate applications.'),
 S(4,'cert','Baby','जन्म प्रमाण पत्र','Birth Certificate','जन्म प्रमाण पत्र आवेदन में सहायता (जहाँ उपलब्ध)।','Birth certificate assistance, where available.'),
 S(5,'scheme','Landmark','पेंशन आवेदन सहायता','Pension Application Assistance','पेंशन योजनाओं के आवेदन में सहायता।','Help applying for pension schemes.'),
 S(6,'scheme','ClipboardList','राशन कार्ड सहायता','Ration Card Assistance','राशन कार्ड से जुड़े आवेदनों में सहायता।','Help with ration card related applications.'),
 S(7,'id','CreditCard','पैन कार्ड आवेदन / सुधार','PAN Card Application / Correction','पैन कार्ड के नए आवेदन या सुधार में सहायता।','Help with new PAN applications or corrections.'),
 S(8,'id','GraduationCap','छात्रवृत्ति आवेदन सहायता','Scholarship Application Assistance','छात्रवृत्ति के ऑनलाइन आवेदन में सहायता।','Help with online scholarship applications.'),
 S(9,'id','PenLine','परीक्षा / प्रवेश फ़ॉर्म','Exam & Admission Forms','परीक्षा और प्रवेश फ़ॉर्म भरने में सहायता।','Help filling exam and admission forms.'),
 S(10,'digital','Printer','स्कैन और प्रिंट','Document Scanning & Printing','दस्तावेज़ स्कैन और प्रिंट की सुविधा।','Document scanning and printing.'),
 S(11,'digital','Zap','बिजली बिल भुगतान','Electricity Bill Payment','बिजली बिल भुगतान (जहाँ उपलब्ध)।','Electricity bill payment, where available.'),
 S(12,'digital','Smartphone','मोबाइल रिचार्ज','Mobile Recharge','मोबाइल रिचार्ज (जहाँ उपलब्ध)।','Mobile recharge, where available.'),
];
export const isPublic=s=>s.isAvailable&&s.isVerified;
export const publicServices=()=>services.filter(s=>isPublic(s)||(import.meta.env.DEV&&centre.showDraftServicesInDev)).sort((a,b)=>a.order-b.order);
