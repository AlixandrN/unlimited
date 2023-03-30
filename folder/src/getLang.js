export const en = {
  "Unlimited Access<br>to All Features": "Unlimited Access<br>to All Features",
  "Unlimited documents": "Unlimited documents",
  "Count mode": "Count mode",
  "Text recognition (OCR)": "Text recognition (OCR)",
  "Monthly": "Monthly",
  "per month": "per month",
  "3 DAYS FREE": "3 DAYS FREE",
  "month": "month",
  "Annually": "Annually",
  "-83%": "-83%",
  "per year": "per year",
  "MOST POPULAR": "MOST POPULAR",
  "Continue": "Continue",
  "Auto-renewable. Cancel anytime.": "Auto-renewable. Cancel anytime.",
  "Terms of Use": "Terms of Use",
  "Restore": "Restore",
  "Privacy Policy": "Privacy Policy"
  };

  export const es = {
    "Unlimited Access<br>to All Features": "Acceso ilimitado<br>a todas las funciones",
    "Unlimited documents": "Documentos ilimitados",
    "Count mode": "Modo de recuento",
    "Text recognition (OCR)": "Reconocimiento de texto (OCR)",
    "Monthly": "Mensual",
    "per month": "por mes",
    "3 DAYS FREE": "3 DÍAS GRATIS",
    "month": "mes",
    "Annually": "Anual",
    "-83%": "-83%",
    "per year": "por año",
    "MOST POPULAR": "LO MÁS PEDIDO",
    "Continue": "Continuar",
    "Auto-renewable. Cancel anytime.": "Renovable automáticamente. Cancela cuando quieras.",
    "Terms of Use": "Términos de uso",
    "Restore": "Restablecer",
    "Privacy Policy": "Política de privacidad"
};

export const fr = {
  "Unlimited Access<br>to All Features": "Accès illimité<br>à toutes les fonctionnalités",
  "Unlimited documents": "Documents illimités",
  "Count mode": "Mode décompte",
  "Text recognition (OCR)": "Reconnaissance de texte (OCR)",
  "Monthly": "Tous les mois",
  "per month": "par mois",
  "3 DAYS FREE": "3 JOURS GRATUITS",
  "month": "mois",
  "Annually": "Tous les ans",
  "-83%": "-83%",
  "per year": "par an",
  "MOST POPULAR": "LE PLUS POPULAIRE",
  "Continue": "Continuer",
  "Auto-renewable. Cancel anytime.": "Renouvelable automatiquement. Annulez à tout moment.",
  "Terms of Use": "Conditions d'utilisation",
  "Restore": "Restaurer",
  "Privacy Policy": "Politique de confidentialité"
};

export const ja = {
  "Unlimited Access<br>to All Features": "全ての機能へ<br>無制限アクセス",
  "Unlimited documents": "無制限のドキュメント",
  "Count mode": "カウントモード",
  "Text recognition (OCR)": "テキスト認識 (OCR)",
  "Monthly": "月次",
  "per month": "/月",
  "3 DAYS FREE": "3日間無料",
  "month": "か月",
  "Annually": "年次",
  "-83%": "-83%",
  "per year": "/年",
  "MOST POPULAR": "一番人気",
  "Continue": "続行する",
  "Auto-renewable. Cancel anytime.": "自動更新可能。いつでもキャンセル可能。",
  "Terms of Use": "利用規約",
  "Restore": "復元する",
  "Privacy Policy": "プライバシーポリシー"
};

export const nl = {
  "Unlimited Access<br>to All Features": "Onbeperkte toegang<br>tot alle functies",
  "Unlimited documents": "Onbeperkt aantal documenten",
  "Count mode": "Aantal modus",
  "Text recognition (OCR)": "Gratis tekstherkenning (OCR)",
  "Monthly": "Maandelijks",
  "per month": "per maand",
  "3 DAYS FREE": "3 DAGEN GRATIS",
  "month": "maand",
  "Annually": "Jaarlijks",
  "-83%": "-83%",
  "per year": "per jaar",
  "MOST POPULAR": "MEEST POPULAIR",
  "Continue": "Doorgaan",
  "Auto-renewable. Cancel anytime.": "Automatisch verlengbaar. Altijd annuleren.",
  "Terms of Use": "Gebruiksvoorwaarden",
  "Restore": "Herstellen",
  "Privacy Policy": "Privacybeleid"
};

export const ru = {
  "Unlimited Access<br>to All Features": "Неограниченный доступ<br>ко всем функциям",
  "Unlimited documents": "Любое количество документов",
  "Count mode": "Режим «Подсчет»",
  "Text recognition (OCR)": "Распознавание текста (OCR)",
  "Monthly": "1 месяц",
  "per month": "в месяц",
  "3 DAYS FREE": "3 ДНЯ БЕСПЛАТНО",
  "month": "месяц",
  "Annually": "1 ГОД",
  "-83%": "-83%",
  "per year": "в год",
  "MOST POPULAR": "ПОПУЛЯРНОЕ",
  "Continue": "Продолжить",
  "Auto-renewable. Cancel anytime.": "Автопродление. Отмена в любое время.",
  "Terms of Use": "Условия использования",
  "Restore": "Восстановить",
  "Privacy Policy": "Конфиденциальность"
};

export const zh = {
  "Unlimited Access<br>to All Features": "无限制使用<br>所有功能",
  "Unlimited documents": "文档无限制",
  "Count mode": "计数模式",
  "Text recognition (OCR)": "文本识别（OCR）",
  "Monthly": "每月",
  "per month": "每月<br>",
  "3 DAYS FREE": "3日免费",
  "month": "月",
  "Annually": "包年",
  "-83%": "-83%",
  "per year": "每年",
  "MOST POPULAR": "最热门",
  "Continue": "继续",
  "Auto-renewable. Cancel anytime.": "自动续订。可随时取消。",
  "Terms of Use": "使用条款",
  "Restore": "恢复",
  "Privacy Policy": "隐私政策"
};

export const getLangObject = (language) => {
  switch (language) {
    case 'en': return en; break;
    case 'es': return es; break;
    case 'fr': return fr; break;
    case 'ja': return ja; break;
    case 'nl': return nl; break;
    case 'ru': return ru; break;
    case 'zh': return zh;
  }
};
