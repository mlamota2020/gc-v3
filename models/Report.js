import { Schema, model, models } from 'mongoose'
/** Model of the reports. */
const ReportSchema = new Schema({
    person_name: { 
        type: String,
        required: true,
    },
    title: { 
        type: String, 
        required: true,
    },
    report: { 
        type: String,
        required: true,
    },
    state: { 
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default models.Report || model('Report', ReportSchema);