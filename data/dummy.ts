import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "16",
  "folder": "16-revano-cafe",
  "appName": "Revano Cafe",
  "domain": "Cafe Ordering",
  "heroHeadline": "Your daily caffeine fix, sorted",
  "heroSubtitle": "Skip the line. Order your favorite coffee and pastries ahead of time and pick them up fresh.",
  "features": [
    {
      "icon": "Coffee",
      "title": "Coffee Selection",
      "description": "From single-origin pour overs to classic lattes."
    },
    {
      "icon": "Croissant",
      "title": "Fresh Pastries",
      "description": "Baked daily. Perfect companions for your brew."
    },
    {
      "icon": "Smartphone",
      "title": "Order Ahead",
      "description": "Place your order via the app and skip the queue."
    },
    {
      "icon": "Clock",
      "title": "Live Status",
      "description": "Know exactly when your order is being prepared and when it's ready."
    }
  ],
  "stats": [
    {
      "label": "Orders Today",
      "value": "124",
      "trend": "+15"
    },
    {
      "label": "Avg Prep Time",
      "value": "4m 30s",
      "trend": "-15s"
    },
    {
      "label": "Top Item",
      "value": "Iced Latte",
      "trend": "Stable"
    },
    {
      "label": "Active Tables",
      "value": "8",
      "trend": "Busy"
    }
  ],
  "tableColumns": [
    {
      "key": "customer",
      "label": "Order#"
    },
    {
      "key": "items",
      "label": "Customer"
    },
    {
      "key": "total",
      "label": "Items"
    },
    {
      "key": "time",
      "label": "Total"
    },
    {
      "key": "status",
      "label": "Time"
    }
  ],
  "tableRows": [
    {
      "id": "ORD-201",
      "customer": "Meja 04",
      "items": "2x Iced Americano, 1x Croissant",
      "total": "Rp 95.000",
      "time": "08:15 AM",
      "status": "Delivered"
    },
    {
      "id": "ORD-202",
      "customer": "Takeaway - Andi",
      "items": "1x V60 Ethiopia",
      "total": "Rp 45.000",
      "time": "08:20 AM",
      "status": "Ready"
    },
    {
      "id": "ORD-203",
      "customer": "Meja 12",
      "items": "2x Cappuccino, 2x Cheesecake",
      "total": "Rp 160.000",
      "time": "08:25 AM",
      "status": "Preparing"
    },
    {
      "id": "ORD-204",
      "customer": "GrabFood - driver",
      "items": "5x Kopi Susu Aren",
      "total": "Rp 125.000",
      "time": "08:30 AM",
      "status": "Preparing"
    },
    {
      "id": "ORD-205",
      "customer": "Meja 02",
      "items": "1x Flat White",
      "total": "Rp 35.000",
      "time": "08:10 AM",
      "status": "Delivered"
    },
    {
      "id": "ORD-206",
      "customer": "Takeaway - Siska",
      "items": "1x Matcha Latte",
      "total": "Rp 40.000",
      "time": "08:35 AM",
      "status": "Cancelled"
    },
    {
      "id": "ORD-207",
      "customer": "Meja 08",
      "items": "1x Espresso, 1x Brownie",
      "total": "Rp 55.000",
      "time": "08:40 AM",
      "status": "Preparing"
    },
    {
      "id": "ORD-208",
      "customer": "Takeaway - Budi",
      "items": "2x Caramel Macchiato",
      "total": "Rp 90.000",
      "time": "08:45 AM",
      "status": "Preparing"
    }
  ],
  "statuses": [
    "Preparing",
    "Ready",
    "Delivered",
    "Cancelled"
  ],
  "ctaHeadline": "Craving a good cup?",
  "ctaSubtitle": "Place your order now and we'll start brewing.",
  "ctaButtonText": "Order Now",
  "readmeDescription": "A cafe ordering system to track customer orders, preparation status, and daily sales.",
  "readmeFeaturesList": [
    "Live order tracking",
    "Table and takeaway management",
    "Item summary",
    "Warm cafe aesthetic"
  ],
  "theme": {
    "heroLayout": "centered",
    "navStyle": "glass",
    "cardStyle": "minimal",
    "primary": "#451a03",
    "secondary": "#b45309",
    "accent": "#ffedd5",
    "background": "#fdf8f6",
    "text": "#292524",
    "heroGradient": "linear-gradient(135deg, rgba(69, 26, 3, 0.98) 0%, rgba(180, 83, 9, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(180, 83, 9, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(255, 237, 213, 0.14) 0%, transparent 28%)",
    "surface": "rgba(69, 26, 3, 0.05)",
    "surfaceStrong": "rgba(69, 26, 3, 0.08)",
    "border": "rgba(69, 26, 3, 0.12)",
    "borderStrong": "rgba(69, 26, 3, 0.22)",
    "softText": "rgba(41, 37, 36, 0.72)",
    "primarySoft": "rgba(69, 26, 3, 0.12)",
    "secondarySoft": "rgba(180, 83, 9, 0.12)",
    "secondaryStrong": "rgba(180, 83, 9, 0.18)",
    "accentSoft": "rgba(255, 237, 213, 0.8)"
  }
};
