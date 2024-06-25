export const transformHealthData = (data) => {
  return data
    .map((item) => ({
      systolic: item.systolic,
      diastolic: item.diastolic,
      weight: item.weight,
      createdAt: new Date(item.createAt).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
      }),
    }))
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
};

export const transformInquiryData = (data) => {
  return data.map((item) => ({
    title: item.title,
    content: item.content,
    status: item.status,
    createAt: new Date(item.createAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
  }));
};

// export const transformInquiryData = (data) => {
//   return data.map((item) => ({
//     title: item.title,
//     content: item.content,
//     status: item.status,
//     date: new Date(item.createAt).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//     }),
//   }));
// };
