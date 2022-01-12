import { Schema, model, models } from 'mongoose'
/** Model of the reports. */
const ResolvedReportSchema = new Schema({
    person_name: { 
        type: String, 
        required: true,
    },
    title: { 
        type: String, 
        required: true
    },
    report: { 
        type: String,
        required: true
    },
    state: { 
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default models.ResolvedReport || model('ResolvedReport', ResolvedReportSchema);