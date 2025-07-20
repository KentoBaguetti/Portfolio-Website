import axios from "axios";

interface leetcodeStatsAPIJSON {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: unknown;
}

const getLeetcodeStats = async () => {
  try {
    const response = await axios.get(
      "https://leetcode-stats-api.herokuapp.com/KentoBaguetti"
    );

    const res: leetcodeStatsAPIJSON = response.data;

    const total = res.totalSolved;
    const easies = res.easySolved;
    const mediums = res.mediumSolved;
    const hards = res.hardSolved;

    return {
      total: total,
      easy: easies,
      medium: mediums,
      hard: hards,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Error fetching leetcode stats: ${e.message}`);
    } else {
      console.error("Error fetching leetcode stats:", e);
    }
  }
};

export default getLeetcodeStats;
