import React from 'react';
import { FiAward, FiExternalLink, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CertificateCard = ({ certificate, index, onPreview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 group"
    >
      <div>
        {/* Certificate Image / PDF Thumbnail */}
        {certificate.previewUrl && (
          <div 
            onClick={() => onPreview && onPreview(certificate)}
            className="relative cursor-pointer overflow-hidden bg-slate-100 dark:bg-slate-800 h-44 border-b border-slate-100 dark:border-slate-800 flex items-center justify-center"
          >
            {certificate.previewUrl.endsWith('.pdf') ? (
              <iframe
                src={`${certificate.previewUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                title={certificate.title}
                className="w-full h-full pointer-events-none object-cover"
              />
            ) : (
              <img 
                src={certificate.previewUrl} 
                alt={certificate.title} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
              <FiEye className="w-4 h-4" />
              <span>Preview Certificate</span>
            </div>
          </div>
        )}

        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                certificate.category === 'Hackathon'
                  ? 'bg-purple-50 dark:bg-purple-950/70 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400'
                  : 'bg-blue-50 dark:bg-blue-950/70 border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400'
              }`}>
                <FiAward className="w-4 h-4" />
              </div>
              {certificate.category && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                  certificate.category === 'Hackathon'
                    ? 'bg-purple-100/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                    : 'bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                }`}>
                  {certificate.category}
                </span>
              )}
            </div>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {certificate.issueDate || "Certified"}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug line-clamp-2">
            {certificate.title}
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Issued by: <span className="text-slate-700 dark:text-slate-200 font-semibold">{certificate.issuer}</span>
          </p>
        </div>
      </div>

      <div className="p-4 px-5 bg-slate-50/50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        {certificate.previewUrl && (
          <button
            onClick={() => onPreview && onPreview(certificate)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <FiEye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        )}

        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
        >
          <span>Open PDF</span>
          <FiExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
