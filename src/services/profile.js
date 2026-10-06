// Single source of truth for the facts that change with time.
// Everything is derived from these two dates, so the site never needs a manual update.
export const BIRTH_DATE = { year: 2009, month: 7, day: 4 }          // 4 July 2009
export const CODING_START = { year: 2023, month: 10 }               // October 2023

/** Full years completed since BIRTH_DATE (birthday-aware). */
export const getAge = (now = new Date()) => {
    const { year, month, day } = BIRTH_DATE
    let age = now.getFullYear() - year
    const m = now.getMonth() + 1
    if (m < month || (m === month && now.getDate() < day)) age -= 1
    return age
}

/** Whole months of programming experience since CODING_START (month granularity). */
export const getExperienceMonths = (now = new Date()) =>
    Math.max(0, (now.getFullYear() - CODING_START.year) * 12 + (now.getMonth() + 1 - CODING_START.month))

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`

/**
 * Human label for the experience, e.g. "8 months", "1 year", "3 years", "3+ years".
 * `precise: true` gives "2 years, 11 months" instead of rounding down with a "+".
 */
export const getExperienceLabel = (now = new Date(), { precise = false } = {}) => {
    const total = getExperienceMonths(now)
    const years = Math.floor(total / 12)
    const months = total % 12
    if (years === 0) return plural(months, "month")
    if (months === 0) return plural(years, "year")
    return precise ? `${plural(years, "year")}, ${plural(months, "month")}` : `${years}+ years`
}

export const CODING_START_LABEL = "October 2023"
